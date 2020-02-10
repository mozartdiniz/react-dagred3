import { storiesOf } from '@storybook/react';
import * as React from 'react';
import DagreD3, { INode, ILink } from '../src';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Style', module);
stories.addDecorator(withKnobs);

const nodes: INode[] = [
    {
        id: 'A',
        name: 'A - 1 - 1'
    },
    {
        id: 'B',
        name: 'B - 2 - 2'
    },
    {
        id: 'C',
        name: 'C - 3 - 3'
    },
    {
        id: 'D',
        name: 'D - 4 - 4'
    },
    {
        id: 'E',
        name: 'E - 5 - 5'
    },
    {
        id: 'F',
        name: 'F - 6 - 6'
    },
    {
        id: 'G',
        name: 'G - 7 - 7'
    },
    {
        id: 'H',
        name: 'H - 8 - 8'
    },
    {
        id: 'I',
        name: 'I - 9 - 9'
    }
];

const links: ILink[] = [
    {
        originId: 'A',
        destinationId: 'B',
        curve: 'monotone',
        label: 'monotone'
    },
    {
        originId: 'A',
        destinationId: 'C',
        curve: 'linear',
        label: 'linear'
    },
    {
        originId: 'B',
        destinationId: 'D',
        curve: 'natural',
        label: 'natural'
    },
    {
        originId: 'B',
        destinationId: 'E',
        curve: 'natural',
        label: 'basis'
    },
    {
        originId: 'C',
        destinationId: 'F',
        curve: 'step',
        label: 'step'
    },
    {
        originId: 'C',
        destinationId: 'G',
        curve: 'linear',
        label: 'linear'
    },
    {
        originId: 'G',
        destinationId: 'H',
        curve: 'linear',
        label: 'linear'
    },
    {
        originId: 'G',
        destinationId: 'I',
        curve: 'step',
        label: 'step'
    },
    {
        originId: 'I',
        destinationId: 'A',
        curve: 'natural',
        label: 'natural'
    },
    {
        originId: 'E',
        destinationId: 'F',
        label: 'basis'
    },
    {
        originId: 'E',
        destinationId: 'D',
        curve: 'linear',
        label: 'linear'
    }
];

stories.add('Link Curve Types', () => <DagreD3 nodes={nodes} links={links} />);
