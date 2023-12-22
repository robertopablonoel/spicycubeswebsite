if (!customElements.get('image-slider')) {
  class Slider extends HTMLElement {
    constructor() {
      super();

      this.mobileOnly = this.dataset.mobileOnly === 'true' ? true : false;
      this.element = this;
      this.thumbs = false;
      this.direction = 'horizontal';
      this.slideToClickedSlide = false;

      if (this.dataset.direction) {
        this.direction = this.dataset.direction;
      }

      if (!!this.dataset.thumbs) {
        this.thumbsSlider = document.querySelector(
          `.${this.dataset.thumbs}`,
        )?.swiper;

        this.thumbs = {
          swiper: this.thumbsSlider,
        };

        this.slideToClickedSlide = true;
      }

      this.navigation =
        this.dataset.navigation === 'true'
          ? {
              nextEl: this.dataset.arrowNext,
              prevEl: this.dataset.arrowPrev,
            }
          : false;

      this.autoplay =
        this.dataset.autoplay === 'true'
          ? {
              delay: parseInt(this.dataset.duration),
            }
          : false;

      this.pagination =
        this.dataset.dots === 'true'
          ? {
              clickable: true,
              el: this.dataset.pagination,
              type: 'bullets',
              bulletActiveClass:
                this.dataset.bulletActiveClass ||
                'swiper-pagination-bullet-active',
              bulletClass:
                this.dataset.bulletClass || 'swiper-pagination-bullet',
            }
          : false;
    }

    connectedCallback() {
      if (window.Swiper) {
        this.init();
        return;
      }
      document
        .querySelector('[data-slider-script]')
        .addEventListener('load', () => this.init());
    }

    init() {
      const options = {
        autoplay: this.autoplay,
        autoHeight: this.dataset.autoHeight == 'true' ? true : false,
        pagination: this.pagination,
        thumbs: this.thumbs,
        direction: this.direction,
        slideToClickedSlide: this.slideToClickedSlide,
        slidesPerView: Number(this.dataset.slidesPerViewMobile) || 1,
        slidesPerGroup: Number(this.dataset.slidesPerViewMobile) || 1,
        spaceBetween: Number(this.dataset.spaceBetween) || 2,
        centeredSlides: !!this.dataset.centered,
        centeredSlidesBounds: !!this.dataset.centeredBounds,
        preventClicksPropagation: true,
        navigation: false,
        loop: this.dataset.loop == 'true' ? true : false,
        initialSlide: Number(this.dataset.initialSlide) || 0,
        breakpoints: {
          768: {
            slidesPerView: Number(this.dataset.slidesPerView) || 1,
            slidesPerGroup: Number(this.dataset.slidesPerView) || 1,
            navigation: this.navigation,
          },
        },
      };

      const adjustMobile = () => {
        const breakpoint = window.matchMedia('(min-width:768px)');

        if (breakpoint.matches) {
          if (this.swiper) {
            this.swiper.destroy();

            console.log(this);

            const duplicates = this.querySelectorAll('.swiper-slide-duplicate');

            for (dup of duplicates) {
              dup.remove();
            }
          }
          this.classList.add('slider-disabled');
          console.log('destroy slider');
        } else if (!this.swiper) {
          console.log('created slider');
          this.slider = new Swiper(this, options);
          this.classList.remove('slider-disabled');
        }
      };

      if (this.mobileOnly) {
        adjustMobile();

        window.onresize = (event) => {
          adjustMobile();
        };
      } else {
        this.slider = new Swiper(this, options);
      }

      if (!!this.dataset.thumbs) {
        this.slider.controller.control = this.thumbsSlider;
      }
    }
  }
  customElements.define('image-slider', Slider);
}
