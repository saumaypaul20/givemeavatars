import { ALL_OPTIONS } from "../configs/options"

export  const generateRandomStyle =()=>{
    return {
      avatarStyle: ALL_OPTIONS.avatarStyle[Math.floor(Math.random()*ALL_OPTIONS.avatarStyle.length)],
      topType: ALL_OPTIONS.topType[Math.floor(Math.random()*ALL_OPTIONS.topType.length)],
      accessoriesType: ALL_OPTIONS.accessoriesType[Math.floor(Math.random()*ALL_OPTIONS.accessoriesType.length)],
      hairColor: ALL_OPTIONS.hairColor[Math.floor(Math.random()*ALL_OPTIONS.hairColor.length)],
      facialHairType: ALL_OPTIONS.facialHairType[Math.floor(Math.random()*ALL_OPTIONS.facialHairType.length)],
      clotheType: ALL_OPTIONS.clothesArray[Math.floor(Math.random()*ALL_OPTIONS.clothesArray.length)],
      clotheColor: ALL_OPTIONS.clotheColor[Math.floor(Math.random()*ALL_OPTIONS.clotheColor.length)],
      eyeType: ALL_OPTIONS.eyeType[Math.floor(Math.random()*ALL_OPTIONS.eyeType.length)],
      eyebrowType: ALL_OPTIONS.eyebrowType[Math.floor(Math.random()*ALL_OPTIONS.eyebrowType.length)],
      mouthType: ALL_OPTIONS.mouthType[Math.floor(Math.random()*ALL_OPTIONS.mouthType.length)],
      skinColor: ALL_OPTIONS.skinColor[Math.floor(Math.random()*ALL_OPTIONS.skinColor.length)],
    }
  }