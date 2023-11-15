import express, { Router } from 'express';
import axios from 'axios';
import * as DateUtil from '../../util/dateUtil';
// ../../util/dateUtil'

const router: Router = express.Router();

router.get('/', (req, res) => {
  res.send('유저 목록 페이지');
});

router.get("/nowDate.do", (req, res) => {
  res.send(DateUtil.getCurrentDate());
})



router.get('/get.do', async (req, res) => {
  const userSabun: string = req.query.userSabun as string;
  const durationMinutes: number = parseInt(req.query.durationMinutes as string);

  const response  = await getToken(userSabun, durationMinutes);
  console.log("getdo : " +response);
  res.send(response);
});

async function getToken(userSabun : string, durationMinutes : number){
  try{
    const url = "http://192.168.10.1:8443/BT-EMS/webservice/api/auth/token.do";
    
    const params = {
      userSabun : userSabun
      , durationMinutes : durationMinutes
    }

    const response = await axios.get(url, {params});
    
    return response.data;
  }catch(error){
    console.error('Error calling external API:', error);
    throw error;
  }
}

export default router;