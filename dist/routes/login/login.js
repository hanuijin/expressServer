"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const DateUtil = __importStar(require("../../util/dateUtil"));
// ../../util/dateUtil'
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('유저 목록 페이지');
});
router.get("/nowDate.do", (req, res) => {
    res.send(DateUtil.getCurrentDate());
});
router.get('/get.do', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userSabun = req.query.userSabun;
    const durationMinutes = parseInt(req.query.durationMinutes);
    const response = yield getToken(userSabun, durationMinutes);
    console.log("getdo : " + response);
    res.send(response);
}));
function getToken(userSabun, durationMinutes) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "http://192.168.10.1:8443/BT-EMS/webservice/api/auth/token.do";
            const params = {
                userSabun: userSabun,
                durationMinutes: durationMinutes
            };
            const response = yield axios_1.default.get(url, { params });
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error('Error calling external API:', error);
            throw error;
        }
    });
}
exports.default = router;
