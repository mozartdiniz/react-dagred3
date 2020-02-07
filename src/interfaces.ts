import { NodeShape, attrs } from './types';
import { CurveType } from './index';

export interface INode {
    id: string;
    name: string;
    shape?: NodeShape;
    selected?: boolean;
}

export interface ILink {
    originId: string;
    destinationId: string;
    label?: string;
    curve?: CurveType;
    style?: string;
    arrowheadStyle?: string;
}

export interface IProps {
    nodeShape: NodeShape;
    attrs?: attrs;
}
