import { storiesOf } from '@storybook/react';
import * as React from 'react';
import DagreD3, { INode, ILink, IProps } from '../src';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Basics', module);
stories.addDecorator(withKnobs);

const nodes: INode[] = [
    {
        id: 'A',
        name: 'A',
        shape: 'rect'
    },
    {
        id: 'B',
        name: 'B',
        shape: 'circle'
    },
    {
        id: 'C',
        name: 'C',
        shape: 'diamond'
    },
    {
        id: 'D',
        name: 'D',
        shape: 'ellipse'
    }
];

const links: ILink[] = [
    {
        originId: 'A',
        destinationId: 'C'
    },
    {
        originId: 'B',
        destinationId: 'C'
    },
    {
        originId: 'C',
        destinationId: 'D'
    }
];

const options: IProps = {
    nodeShape: 'circle'
};

stories.add('Set shape per node', () => (
    <DagreD3 nodes={nodes} links={links} options={options} />
));
