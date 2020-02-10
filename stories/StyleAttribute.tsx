import { storiesOf } from '@storybook/react';
import * as React from 'react';
import DagreD3, { INode, ILink, IProps } from '../src';
import { withKnobs } from '@storybook/addon-knobs';

import './StyleAttribute.css';

const stories = storiesOf('Style', module);
stories.addDecorator(withKnobs);

const nodes: INode[] = [
    {
        id: 'A',
        name: 'A'
    },
    {
        id: 'B',
        name: 'B'
    },
    {
        id: 'C',
        name: 'C'
    },
    {
        id: 'D',
        name: 'D'
    },
    {
        id: 'E',
        name: 'E'
    }
];

const links: ILink[] = [
    {
        originId: 'A',
        destinationId: 'C',
        style: 'stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;',
        arrowheadStyle: 'fill: #f66;',
        curve: 'linear'
    },
    {
        originId: 'B',
        destinationId: 'C',
        style: 'stroke: #d0d0d0;',
        arrowheadStyle: 'fill: #d0d0d0'
    },
    {
        originId: 'C',
        destinationId: 'E',
        style: 'stroke: #d0d0d0;',
        arrowheadStyle: 'fill: #d0d0d0'
    },
    {
        originId: 'D',
        destinationId: 'E',
        style: 'stroke-dasharray: 5; animation: dash 30s linear;'
    },
    {
        originId: 'D',
        destinationId: 'B'
    }
];

const options: IProps = {
    nodeShape: 'circle'
};

stories.add('Style Attribute', () => (
    <DagreD3 nodes={nodes} links={links} options={options} />
));
