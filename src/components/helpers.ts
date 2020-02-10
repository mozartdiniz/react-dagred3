import * as d3 from 'd3';
import { CurveType } from '../types';

export const curveType = (curveType: CurveType): d3.CurveFactory => {
    switch (curveType) {
        case 'step':
            return d3.curveStepAfter;
        case 'linear':
            return d3.curveLinear;
        case 'natural':
            return d3.curveNatural;
        case 'monotone':
            return d3.curveMonotoneY;
        default:
            return d3.curveBasis;
    }
};
