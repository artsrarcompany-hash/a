// FIX: Import React to resolve 'Cannot find namespace 'React'' error for React.ReactNode.
import React from 'react';

export interface Category {
  name: string;
  icon: React.ReactNode;
}

export interface Listing {
  id: number;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
  isVerified: boolean;
  category: string;
}

export interface User {
    name: string;
    avatarUrl: string;
    isVerified: boolean;
    memberSince: string;
    location: string;
    bio: string;
}