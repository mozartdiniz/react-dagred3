import React, { FC, useEffect } from 'react';
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';

import './DagreD3.css';
import { curveType } from './helpers';
import { INode, IProps } from '../interfaces';

export interface IDagreD3Props {
    nodes: INode[];
    links: any[];
    options?: IProps;
    onClick?: (id: INode | undefined, node: dagreD3.Node) => void;
}

export const DagreD3: FC<IDagreD3Props> = ({
    nodes = [],
    links = [],
    options,
    onClick
}) => {
    // textInput must be declared here so the ref can refer to it
    let ref: SVGSVGElement | undefined = undefined;

    const nodeShape = options?.nodeShape || 'rect';
    const attrs = options?.attrs;

    useEffect(() => {
        if (!ref) {
            return;
        }

        const g = new dagreD3.graphlib.Graph().setGraph({});

        // Automatically label each of the nodes
        nodes.forEach(({ id, name, selected, shape }) => {
            g.setNode(id, {
                label: name,
                shape: shape || nodeShape,
                class: [selected ? 'current' : '']
            });
        });

        links.forEach(
            ({
                originId,
                destinationId,
                label,
                curve,
                style,
                arrowheadStyle
            }) => {
                g.setEdge(originId, destinationId, {
                    label,
                    style,
                    arrowheadStyle,
                    curve: curveType(curve)
                });
            }
        );

        const svg = d3.select(ref);
        const inner: any = svg.select('g');

        // Round the corners of the nodes
        if (attrs) {
            g.nodes().forEach(v => {
                Object.entries(attrs).forEach(attr => {
                    const [key, value] = attr;
                    const node = g.node(v);

                    node[key] = value;
                });
            });
        }

        const render = new dagreD3.render();

        render(inner, g);

        if (onClick) {
            const onClickCallback = (id: string): void => {
                const node = g.node(id);
                const data = nodes.find(node => node.id === id);

                onClick(data, node);
            };

            svg.selectAll('g.node').on('click', onClickCallback);
        }

        svg.attr('height', g.graph().height + 40);
        svg.attr('width', g.graph().width + 40);

        const xCenterOffset =
            (parseInt(svg.attr('width'), 10) - g.graph().width) / 2;
        inner.attr('transform', 'translate(' + xCenterOffset + ', 20)');
    }, [attrs, links, nodes, onClick, ref, nodeShape]);

    return (
        <svg ref={(refDOM: SVGSVGElement): SVGSVGElement => (ref = refDOM)}>
            <g></g>
        </svg>
    );
};
