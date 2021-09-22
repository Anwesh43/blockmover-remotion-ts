import React from 'react'
import {Sequence} from 'remotion'
import Block from './BlockMover/Block'
import Ball from './BlockMover/Ball'
import BlockText from './BlockMover/BlockText';

const BlockMover : React.FC<any> = () => {
    return (
      <>
        <Sequence from = {0} durationInFrames = {105}>
          
          <Block></Block>
        </Sequence>

        <Sequence from = {31} durationInFrames = {105}>
          <Ball></Ball>
        </Sequence>
        <Sequence from = {61} durationInFrames = {105}>
          <BlockText></BlockText>
        </Sequence>
      </>
    )
}

export default BlockMover