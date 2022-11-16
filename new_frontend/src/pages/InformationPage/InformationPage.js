import React from "react";

import Header from "../../components/Common/Header/Header";
import InfoItem from "../../components/Common/InfoItem/InfoItem";
import BlockBody from "../../components/InformationPage/BlockBody/BlockBody";
import BlockTitle from "../../components/InformationPage/BlockName/BlockTitle";


const InformationPage = () => {
  return (
    <Header>
      <div style={{
        marginTop: '-35px',
        padding: '10px',
        paddingTop: '20px',
        height: '100vh',
        backgroundColor: 'var(--black-white)'}}
      >
        <BlockTitle title={'Назначение сайта'}/>
        <BlockBody>
          <div>
            Сайт предназначен для обмена
            книгами и другими печатными
            изданиями. Общая информация
            об использовании:
          </div>
          <div>
            1. После регистрации следует
            добавить книги, которые вы хотите
            обменять, в свое хранилище. Далее
            на основе книг хранилища можно 
            создавать объявления
          </div>
          <div>
            2. После создания своего объявления
            вы можете найти на доске подходящие
            вам объявления других пользователей
          </div>
          <div>
            3. Не имея своего аккаунта, вы не
            сможете создать своего объявления
            и добавить свои книги в хранилище.
          </div>
        </BlockBody>
        <BlockTitle title={'Аббревиатуры'}/>
        <BlockBody>
          <div>cbi - create book item - создать книгу </div>
          <div>bs-me - book storage-my exchanges - хранилище книг-мои объявления</div>          
        </BlockBody>
        <BlockTitle title={'Контакты'}/>
        <BlockBody>
          <div>
            Буду очень благодарен, если при
            обнаружении ошибок вы напишете
            мне <strong>на почту: evanmadjar@gmail.com</strong>
          </div>
        </BlockBody>
      </div>
    </Header>
  )
};

export default InformationPage;
