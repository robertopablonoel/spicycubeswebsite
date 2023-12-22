class PredictiveSearch extends HTMLElement {
  constructor() {
    super();

    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector('#predictive-search');

    this.input.addEventListener(
      'input',
      this.debounce((event) => {
        this.onChange(event);
      }, 300).bind(this),
    );
  }

  onChange() {
    const searchTerm = this.input.value.trim();

    if (!searchTerm.length) {
      this.close();
      return;
    }

    this.getSearchResults(searchTerm);
  }

  getSearchResults(searchTerm) {
    fetch(
      `/search/suggest?q=${searchTerm}&resources[type]=product&resources[limit]=4&section_id=predictive-search`,
    )
      .then((response) => {
        if (!response.ok) {
          var error = new Error(response.status);
          this.close();
          throw error;
        }

        return response.text();
      })
      .then((text) => {
        const responseObj = new DOMParser()
          .parseFromString(text, 'text/html')
          .querySelector('#shopify-section-predictive-search');
        const resultsMarkup = responseObj.innerHTML;

        this.predictiveSearchResults.innerHTML = resultsMarkup;
        this.open();
        this.loadResultImages();
      })
      .catch((error) => {
        this.close();
        throw error;
      });
  }

  open() {
    this.predictiveSearchResults.style.display = 'block';
  }

  loadResultImages() {
    const images =
      this.predictiveSearchResults.querySelectorAll('.search-item__img');

    for (let image of images) {
      let downloadingImage = new Image();
      const searchItem = image.closest('.search-item');

      downloadingImage.onload = function () {
        image.src = this.src;
        searchItem.classList.add('visible');
      };
      downloadingImage.src = image.dataset.src;
    }
  }

  close() {
    this.predictiveSearchResults.style.display = 'none';
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
}

customElements.define('predictive-search', PredictiveSearch);
