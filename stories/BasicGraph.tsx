import { storiesOf } from '@storybook/react';
import * as React from 'react';
import DagreD3, { INode, ILink } from '../src';
import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('DagreD3', module);
stories.addDecorator(withKnobs);

const nodes: INode[] = [
    {
        id: 'Company A',
        name: 'Wood PLC Inc'
    },
    {
        id: 'Company B',
        name: 'Paul-Gonzales and Sons'
    },
    {
        id: 'Borrower Name',
        name: 'Mendez, Fernandez and White LLC',
        selected: true
    },
    {
        id: 'Subsidiary 1',
        name: 'Velasquez-Brown Ltd'
    },
    {
        id: 'Subsidiary A',
        name: 'Sosa and Sons Inc'
    },
    {
        id: 'Mx',
        name: 'Wilkins-Stevens and Sons'
    },
    {
        id: 'Z',
        name: 'Garner and Sons and Sons'
    }
];

const links: ILink[] = [
    {
        originId: 'Borrower Name',
        destinationId: 'Subsidiary 1',
        label: '10%'
    },
    {
        originId: 'Borrower Name',
        destinationId: 'Subsidiary A',
        label: '30%'
    },
    {
        originId: 'Company A',
        destinationId: 'Borrower Name',
        label: '50%'
    },
    {
        originId: 'Company B',
        destinationId: 'Borrower Name',
        label: '50%'
    },
    {
        originId: 'Subsidiary 1',
        destinationId: 'Mx',
        label: '50%'
    },
    {
        originId: 'Company B',
        destinationId: 'Subsidiary A',
        label: '70%'
    },
    {
        originId: 'Company B',
        destinationId: 'Z',
        label: 'n%'
    }
];

stories.add('Hello World!', () => <DagreD3 nodes={nodes} links={links} />);
