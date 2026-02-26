import { LightningElement, api, track } from 'lwc';

export default class ArticlewCPE extends LightningElement {
    @api articleTitle;
    @api articleDate;
    @api articleContent;
    @api textAlignment;
    @api backgroundColor;
    @api contentRef;

    _layoutProperties;

    @api
    set layoutProperties(value) {
        if (value) {
            this._layoutProperties = JSON.parse(value);
        }
    }

    get layoutProperties() {
        return this._layoutProperties;
    }

    setStyles() {
        let articleCSS = this.template.host.style;
        articleCSS.setProperty('--dxp-g-root', this.backgroundColor);
        articleCSS.setProperty('text-align', this.textAlignment);

        if (this.layoutProperties) {
            articleCSS.setProperty('border-style', this.layoutProperties.borderStyle);
            articleCSS.setProperty('border-width', this.layoutProperties.borderWeight + 'px');
            articleCSS.setProperty('border-radius', this.layoutProperties.borderRadius + 'px');
            articleCSS.setProperty('height', this.layoutProperties.layoutHeight + 'px');
            articleCSS.setProperty('width', this.layoutProperties.layoutWidth + 'px');
        }
    }

    renderedCallback() {
        this.setStyles();
    }

}