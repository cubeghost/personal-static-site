import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { has } from 'lodash';

const renderNode = (node, index) => (
  has(node, 'root') ? (
    <Tree.Node key={index}>
      <Tree.Label>{node.root}</Tree.Label>
      <Tree.Nodes>{node.nodes.map(renderNode)}</Tree.Nodes>
    </Tree.Node>
  ) : (
    <Tree.Node key={index}>
      <Tree.Label>{node}</Tree.Label>
    </Tree.Node>
  )
);

const Tree = ({root, nodes}) => (
  <Tree.Container>
    <Tree.Label>{root}</Tree.Label>
    <Tree.Nodes>
      {nodes.map(renderNode)}
    </Tree.Nodes>
  </Tree.Container>
);

export default React.memo(Tree);

Tree.propTypes = {
  root: PropTypes.node,
  nodes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.node])),
};

Tree.Container = styled.div``;

Tree.Root = styled.div``;

Tree.Label = styled.span`
  display: inline-block;
  border: 1px solid #000;
  background-color: #fff;
  padding: 0.3em 0.5em;
  margin: 0.2em;
  margin-left: 0;
  position: relative;

  &:not(:only-child) {
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: 3px 3px 0 #000;
  }
`;

Tree.Nodes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${Tree.Nodes} & {
    margin-left: 1.6em;
  }
`;

Tree.Node = styled.li`
  margin-left: 0.35em;
  padding: 0.2em 0;
  border-left: 1px solid #000;
  white-space: nowrap;

  &:first-child {
    padding-top: 0.6em;
  }

  &:last-child {
    border-left: 0;
    padding-top: 0;
  }

  &:before {
    width: 1.1em;
    height: 1.05em;
    vertical-align: top;
    border-bottom: 1px solid #000;
    content: '';
    display: inline-block;
  }

  &:last-child:before {
    border-left: 1px solid #000;
    padding-top: 0.2em;
  }

  &:last-child > ${Tree.Label} {
    margin-top: 0.4em;
  }

  &:only-child:before {
    padding-top: 0.6em;
  }

  &:only-child > ${Tree.Label} {
    margin-top: 0.8em;
  }

  /* &:hover > ${Tree.Label}:after,
  &:hover ${Tree.Label}:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0.2em;
    left: 0.2em;
    z-index: -1;
  }
  &:hover > ${Tree.Label}:after {
    background-color: red !important;
  }
  &:hover ${Tree.Label}:after {
    background-color: yellow;
  } */
`;
