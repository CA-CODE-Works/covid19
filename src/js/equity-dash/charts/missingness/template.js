import css from './index.scss';

export default function template(title) {
  return /*html*/`<div class="py-2">
    <div class="container">
      <div class="col-lg-12 bg-white py-4">
        <div class="row">
          <div class="col-lg-9 col-md-9 col-sm-12 mx-auto">
            <div class="chart-title">${title}</div>
            <div class="svg-holder"></div>
          </div>
        </div>
      </div><!--END col-12-->
    </div><!--END CONTAINER-->
  </div><!--END BG lightblue-->`;
}