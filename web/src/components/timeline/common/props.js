export class JobPanelProps {
    constructor(content, canExpandInPlace, isCollapsedOrig, onClickSelect) {
        this.content = content;
        this.canExpandInPlace = canExpandInPlace;
        this.isCollapsedOrig = isCollapsedOrig;
        this.onClickSelect = onClickSelect;
    }
}

export class GigJobPanelProps extends JobPanelProps {
    constructor(content, canExpandInPlace, isCollapsedOrig, onClickSelect) {
        super(content, canExpandInPlace, isCollapsedOrig, onClickSelect);
    }
}


export const LayoutTypes = {
    EXPANDED: 'expanded',
    COLLAPSED: 'collapsed',
}
