import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default function checkRender(payment, screen, content){ 
    if(screen == 'pending'){
        if(payment == 'waiting'){
            return content;
        } else {
            return null;
        }
    } else {
        if (payment != 'waiting'){
            return content;
        } else {
            return null;
        }
    }
}
