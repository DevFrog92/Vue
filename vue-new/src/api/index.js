import axios from 'axios';

// 1. HTTP Rquest & Response와 관련된 기본 설정
const config  = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}


// 2. API 함수들을 정리
function fetchNewsLsit(){
  // return이 중요하다
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList(){
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(name){
  return axios.get(`${config.baseUrl}user/${name}.json`)
}

function fetchAskDetail(id){
  return axios.get(`${config.baseUrl}item/${id}.json`)
}

export {
  fetchNewsLsit,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchAskDetail,
};