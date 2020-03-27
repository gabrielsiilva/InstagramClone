import React from 'react';
import { TouchableOpacity } from 'react-native';
import home from '../../../assets/home.png';
import heart from '../../../assets/like.png';
import newPost from '../../../assets/new.png';
import profile from '../../../assets/profile.png';
import search from '../../../assets/search.png';
import { FooterContainer, FooterIcon } from './styles';



export default function FooterComponent() {
  return (
    <FooterContainer>
      <TouchableOpacity>
        <FooterIcon source={home} />
      </TouchableOpacity>

      <TouchableOpacity>
        <FooterIcon source={search} />
      </TouchableOpacity>

      <TouchableOpacity>
        <FooterIcon source={newPost} />
      </TouchableOpacity>

      <TouchableOpacity>
        <FooterIcon source={heart} />
      </TouchableOpacity>

      <TouchableOpacity>
        <FooterIcon source={profile} />
      </TouchableOpacity>

    </FooterContainer>
  );
};