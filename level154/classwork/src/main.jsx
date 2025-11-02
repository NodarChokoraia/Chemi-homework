import React from 'react';
// ჩვენ ვაიმპორტებთ რეაქტის ბიბლიოთეკას რეაქტიდან
import { createRoot } from 'react-dom/client';
//შემდეგ ჩვენ ვაიმპორტებთ რეაქტის ფესებს ანუ რეაქტს ფევები რომ შევუქმნათ მაგის საშუალებას
const container = document.getElementById('app');
//ვიღებთ წვდომას html-ის ელემენტზე
const root = createRoot(container);
//ვქმნით ფესვებს html-ის ელემენტის გამოყენებით
root.render(
  <div>
      <h1>Hello world</h1> 
      <button>click me</button>
      <p>Lorem text</p>
  </div>
)
//ბოლოს კიდე ვარენდერებთ html-ში ელემენტებს რეაქტიდან
