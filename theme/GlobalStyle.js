import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import theme from '.';
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

const GlobalStyle = createGlobalStyle`
  // font-family: 'Montserrat', sans-serif;
  // font-family: 'Open Sans', sans-serif;
  // font-family: 'Poppins', sans-serif;
  // font-family: 'Nunito', sans-serif;
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Nunito:300,400,600,700|Open+Sans:300,400,500,600,700|Poppins:300,400,500,600");
  *, ::after, ::before {
    box-sizing: border-box;
  }
  button:focus {outline:0;}
  ${styledNormalize}
  body {
    display: block;
    color: ${theme.colors.textBold};
    font-family: ${theme.fontFamily.os};
    overflow-x: hidden;
    overscroll-behavior-y: contain;
  }
  a {
    text-decoration: none;
  }
  input {
   &:hover, &:focus {
      outline: none;
      // display: block;
    }
  }

  /* Slick carousel */
	.slick-prev, .slick-next {
		height: 40px !important;
		width: 40px !important;
    @media only screen and (max-width: 767px) {
      height: 26px !important;
      width: 26px !important;
    }
	}
	.slick-slide, .slick-slide img, .slick-slide div {
		&:focus {
			outline: none;
		}
	}
	.slick-next {
		right: 25px !important;
		z-index: 1 !important;
    background: url('../static/right-arrow-button.svg') !important;
    background-size: cover !important;
    &:hover {
      background: url('../static/right-arrow-button-orange.svg') !important;
      background-size: cover !important;
    }
		&:before {
      content: '' !important;
      [dir="rtl"] & {
        content: '' !important;
      }
    }
	}
	.slick-prev {
		left: 25px !important;
		z-index: 1 !important;
    background: url('../static/left-arrow-button.svg') !important;
    background-size: cover !important;
    &:hover {
      background: url('../static/left-arrow-button-orange.svg') !important;
      background-size: cover !important;
    }
		&:before {
      content: '' !important;
      [dir="rtl"] & {
        content: '' !important;
      }
    }
	}
  .homepageSlider {
    .slick-prev {
      position: absolute;
      right: 80px !important;
      left: auto !important;
      bottom: 5px !important;
      top: auto !important;
      z-index: 51 !important;
    }
    .slick-next {
      position: absolute;
      top: auto !important;
      bottom: 5px !important;
      z-index: 51 !important;
    }
    .slick-slide img {
      @media only screen and (min-width: 1024px) {
        min-height: 485px;
        height: calc(100vh - 150px);
      }
    }
  }
  .viewMoreSlider {
    @media only screen and (max-width: 48rem) {
      [aria-hidden="true"] {
      }
    }
    .slick-next {
      // background: url('../static/right-arrow-button.svg') !important;
      background: url('../static/right-arrow-button-orange.svg') !important;
      background-size: cover !important;
      position: absolute;
      right: -70px !important;
      top: calc(47%) !important;
      z-index: 2 !important;
      // &:hover {
      //   background: url('../static/right-arrow-button-orange.svg') !important;
      //   background-size: cover !important;
      // }
      @media only screen and (max-width: 767px) {
        right: 15px !important;
        top: calc(50% + 15px) !important;
      }
      @media only screen and (max-width: 48rem) {
        display:none !important;
      }
  		&:before {
        content: '' !important;
        [dir="rtl"] & {
          content: '' !important;
        }
      }
  	}
  	.slick-prev {
      // background: url('../static/left-arrow-button.svg') !important;
      background: url('../static/left-arrow-button-orange.svg') !important;
      background-size: cover !important;
      position: absolute;
      left: -70px !important;
      top: calc(47%) !important;
      z-index: 2 !important;
      // &:hover {s
      //   background: url('../static/left-arrow-button-orange.svg') !important;
      //   background-size: cover !important;
      // }
      @media only screen and (max-width: 48rem) {
        display:none !important;
      }
      @media only screen and (max-width: 767px) {
        left: 15px !important;
        top: calc(50% + 15px) !important;
      }
  		&:before {
        content: '' !important;
        [dir="rtl"] & {
          content: '' !important;
        }
      }
    }
    .slick-track {
      padding: 0 10px;
      top: -25px;
      @media only screen and (max-width: 48rem) {
        top: 20px;
      }

    }
    .slick-list {
      height: calc(65vh) !important;
      min-height: 400px;
      @media only screen and (max-width: 767px) {
        padding-left: 10px !important;
        padding-right: 10px !important;
      }
      @media only screen and (max-width: 48rem) {
        margin-top:0%
        height: calc(58vh) !important;
      }
      @media (min-width: 768px) and (max-width: 1024px) {
        margin-top:0%
        height: calc(55vh) !important;

      }
    }
    .slick-slide {
      border: none;
      background: #f7f8fc;
      width: 100% !important;
      @media only screen and (max-width: 767px) {
        margin: 0 10px;
        width: calc(100% - 20px) !important;
      }
      div {
        opacity: 0.8;
      }
      &.slick-active {
        background: #FFF;
        border-radius: 4px;
        width: calc(100% + 10px) !important;
        margin-left: -5px;
        @media only screen and (max-width: 767px) {
          width: calc(100% + 20px) !important;
          margin-left: -10px;
        }
        div {
          opacity: 1;
        }
      }
    }
  }
  /* Spin Animation */
  .spin {
		animation: spin 1.5s infinite linear;
	}
  @keyframes spin {
  0%  {
		-webkit-transform: rotate(0deg);
	}
  100% {
		-webkit-transform: rotate(360deg);
  }

  /* Shimmer Animation */
  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  .shine {
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-repeat: no-repeat;
    background-size: 800px 104px;
    display: inline-block;
    position: relative;

    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
  }
}`;

export default GlobalStyle;
