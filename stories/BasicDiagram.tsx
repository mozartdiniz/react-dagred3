import { storiesOf } from '@storybook/react';
import * as React from 'react';
import DagreD3, { INode, ILink } from '../src';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Basics', module);
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

stories.add('Basic Diagram', () => <DagreD3 nodes={nodes} links={links} />);
