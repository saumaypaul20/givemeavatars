import { Piece } from 'avataaars'
import React from 'react'

type Props = {}

const Elements = (props: Props) => {
  return (
    <div>
    <Piece
      avatarStyle="Circle"
      pieceType="mouth"
      pieceSize="100"
      mouthType="Eating"
    />
    <Piece
      avatarStyle="Circle"
      pieceType="eyes"
      pieceSize="100"
      eyeType="Dizzy"
    />
    <Piece
      avatarStyle="Circle"
      pieceType="eyebrows"
      pieceSize="100"
      eyebrowType="RaisedExcited"
    />
    <Piece
      avatarStyle="Circle"
      pieceType="accessories"
      pieceSize="100"
      accessoriesType="Round"
    />
    <Piece
      avatarStyle="Circle"
      pieceType="top"
      pieceSize="100"
      topType="LongHairFro"
      hairColor="Red"
    />
    <Piece
      avatarStyle="Circle"
      pieceType="facialHair"
      pieceSize="100"
      facialHairType="BeardMajestic"
    />
    <Piece
      avatarStyle="Circle"
      pieceType="clothe"
      pieceSize="100"
      clotheType="Hoodie"
      clotheColor="Red"
    />
    <Piece
      avatarStyle="Circle"
      pieceType="graphics"
      pieceSize="100"
      graphicType="Skull"
    />
    <Piece
      avatarStyle="Circle"
      pieceType="skin"
      pieceSize="100"
      skinColor="Brown"
    />
  </div>
  )
}

export default Elements