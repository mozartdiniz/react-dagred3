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
    },
    {
        id: 'F',
        name: 'F'
    },
    {
        id: 'G',
        name: 'G'
    },
    {
        id: 'H',
        name: 'H'
    },
    {
        id: 'I',
        name: 'I'
    },
    {
        id: 'J',
        name: 'J'
    },
    {
        id: 'L',
        name: 'L'
    },
    {
        id: 'M',
        name: 'M'
    }
];

const links: ILink[] = [
    {
        originId: 'A',
        destinationId: 'C'
    },
    {
        originId: 'B',
        destinationId: 'D'
    },
    {
        originId: 'C',
        destinationId: 'D'
    },
    {
        originId: 'D',
        destinationId: 'F'
    },
    {
        originId: 'F',
        destinationId: 'B'
    },
    {
        originId: 'D',
        destinationId: 'A'
    },
    {
        originId: 'D',
        destinationId: 'G'
    },
    {
        originId: 'G',
        destinationId: 'H'
    },
    {
        originId: 'H',
        destinationId: 'I'
    },
    {
        originId: 'J',
        destinationId: 'L'
    },
    {
        originId: 'L',
        destinationId: 'M'
    },
    {
        originId: 'I',
        destinationId: 'L'
    },
    {
        originId: 'H',
        destinationId: 'M'
    },
    {
        originId: 'J',
        destinationId: 'A'
    }
];

stories.add('Large Diagram', () => <DagreD3 nodes={nodes} links={links} />);
