define({
    "act=5080006":[//***********充值**********
        {
            param:{
                SUM: '1123',
                NAME:'11',
                PAY_PASSWORD:"asdasdasd",
                BANK_CODE:'1',
                CARD_NO:'1111',
                PHONE_NO:'11111'
            },
            data:{
                RETCODE:'AAAAAAA'
            }
        }
    ],
    "act=5080003":[//**********注册***********
        {
            param:{
                PHONE_NO: "111",
                LOG_PASSWORD: "111",
                PAY_PASSWORD: "111"
            },
            data:{
                RETCODE:'AAAAAAA'
            }
        }
    ],
    "act=5080002":[//********获取短信验证码**********
        {
            param:{
                PHONE_NO:'',
                BUSINESS_CODE:"2"
            },
            data:{
                RETCODE:'AAAAAAA',
                MSG:'绑卡成功',
                SAFETY_PROBLEM_1:'',
                SAFETY_PROBLEM_2:'',
                SAFETY_PROBLEM_3:''
            }
        },
        {
            param:{
                PHONE_NO:'',
                BUSINESS_CODE:"1"
            },
            data:{
                RETCODE:'AAAAAAA',
                MSG:'注册成功'
            }
        },
        {
            param:{
                PHONE_NO:'13100000000',
                INFOTEXT: '短信内容',
                BUSINESS_CODE:"3"
            },
            data:{
                RETCODE:'AAAAAAA',
                SAFETY_PROBLEM_1: '验证问题1',
                SAFETY_PROBLEM_2: '验证问题2',
                SAFETY_PROBLEM_3: '验证问题3',
                MSG:'找回成功'
            }
        }
    ],
    "act=5080031":[
        {
            data:{
                RETCODE:"AAAAAAA"
            }
        }
    ],
    "act=5080038":[
        {
            data:{
                RETCODE:"AAAAAAA"
            }
        }
    ],
    "act=5080015":[
        {
            data:{
                RETCODE:"AAAAAAA",
                BANK_LIST:[
                    {BANK_NAME:"中国银行",BANK_CODE:"555",CARD_NO:"6222000200111779047"}
                ]
            }
        }
    ],
    "act=5080016":[
        {
            data:{
                RETCODE:"AAAAAAA"
            }
        }
    ],
    "act=5080004":[
        {
            data:{
                RETCODE:"AAAAAAA",
                CARD_TYPE:"01",
                BANK_CODE:"001",
                BANK_NAME:"中国银行"
            }
        }
    ],
    "act=5080005":[
        {
            data:{
                RETCODE:"AAAAAAA"
            }
        }
    ],
    "act=5080034":[
        {
            data:{
                RETCODE:"AAAAAAA"
            }
        }
    ],
    /*银行卡列表*/
    "act=7080007": [
        {
            param:{
                USER_NO:"1",
                CARD_TYPE:"1"
            },
            data: {
                "BANK_LIST":[
                    {
                        "BANK_NAME":"招商银行",
                        "CARD_NO":"711101019410***0518",
                        "CARD_TYPE":"12",
                        "BANK_CODE":"CCB"
                    },
                    {
                        "BANK_NAME":"建设银行",
                        "CARD_NO":"711101019410***0519",
                        "CARD_TYPE":"12",
                        "BANK_CODE":"ICBC"
                    }
                ]
            }
        },
        {
            param:{
                USER_NO:"1"
            },
            data: {
                "BANK_LIST":[
                    {
                        "BANK_NAME":"招商银行",
                        "CARD_NO":"7111 0101 9410 **** 518",
                        "CARD_TYPE":"12",
                        "BANK_CODE":"a12721d1",
                        "PROTOCOL_NO":"111",
                        "BANK_NO":"222"
                    },
                    {
                        "BANK_NAME":"建设银行",
                        "CARD_NO":"7111 0101 9410 **** 519",
                        "CARD_TYPE":"12",
                        "BANK_CODE":"a12721d1",
                        "PROTOCOL_NO":"111",
                        "BANK_NO":"222"
                    }
                ]
            }
        }
    ],
    /*获取发卡行类型*/
    "act=7080006":[
        {
            param:{
                CARD_NO:"1"
            },
            data:{
                RETCODE:"AAAAAAA",
                CARD_TYPE:"00",
                BANK_CODE:"CITIC",
                BANK_NAME:"招商银行"
            }

        }
    ],
    /*信用卡还款*/
    "act=7080037":[
        {
            param:{
                USER_NO:"1",
                CREDIT_CARD_NO:"1",
                CARD_TYPE:"00",
                NAME:"1",
                BANK_NAME:"招商银行",
                BANK_CODE:"1",
                SUM:"1",
                PAY_PASSWORD:"1"
            },
            data:{
                RETCODE:"AAAAAAA",
                EXPECTED_ARRIVAL_DATE:"2015.1.1",
                PAYMENT_DATE:"2015.1.1"
            }
        }
    ],
    /*活期宝工资单APP4080031*/
    "act=7080029": [
        {
            param:{
                STARTNM:"1",
                QUERYNM:"1",
                SYS_DATE:""
            },
            data: {
                RETCODE:"AAAAAAA",
                SALARY_LIST:[
                    {
                        NAME:"张三",
                        COMPANY_NAME:"北汽集团",
                        SYS_DATE:"201501",
                        //CHD_SALARY_PERFOR:"7877878",MONTH_SALARY:"1",QUA_PERFOR_BASE:"344532",QUA_PERFOR_COE:"",
                        //QUA_PERFOR_SALARY:"10000",YEAR_PERFOR_BASE:"10000",YEAR_PERFOR_COE:"",YEAR_PERFOR_SALARY:"",
                        //BONUS:"10000",RENEW_REDUCE:"hgfh",BOOK_NEWS_EXPENCE:"",COMMUNICATE_EXPENCE:"11.1.1",
                        //LAOBAO_EXPENCE:"10000",SHOULD_SALARY:"23",YANGLAO:"阿萨德",HOSPITALIZATION:"大苏打.1.1",
                        //UNEMPLOYMENT:"wsddwa",SOCIAL_INSURANCE:"10000",GONGJIJIN:"2222",REAL_SALARY:"2015.1.1",
                        //REAL_SALARY_TF:"4534",PERSIONAL_INCOME_TAX:"10000",REAL_GET_SALARY:"",SERVICE_CHARGE:"2015.1.1",
                        //POST_SALARY:"10000",PERFOR_SALARY:"54443",FIXED_SALARY:"",RENEW_SALARY:"2015.1.1",
                        //REDUCE_SALARY:"10000",OTHER_BONUS:"",PERFOR_SALARY_TOTAL:"",OTHER_ONE:"2015.1.1",
                        //OTHER_TWO:"10000",OTHER_THREE:"3223",OTHER_FOUR:"",OTHER_FIVE:"2015.1.1",
                        CUSTOM1_T:'书报费',
                        CUSTOM1:'50.00',
                        CUSTOM2_T:'通讯',
                        CUSTOM2:'660.00',
                        CUSTOM3_T:'劳保费',
                        CUSTOM3:'1000.00',
                        CUSTOM4_T:'应发工资',
                        CUSTOM4:'42807.67',
                        CUSTOM5_T:'养老',
                        CUSTOM5:'1551.12,',
                        REAL_SALARY:'11'
                    }
                ]
            }
        }
    ],
    /*活期宝转入第一步*/
    "act=SHIFTIN": [
        {
            data: {
                resultList:[
                    {ACCNO:"1.2",ACCNO_Show:"1.2倍收益"},
                    {ACCNO:"1.5",ACCNO_Show:"1.5倍收益"},
                    {ACCNO:"2",ACCNO_Show:"2倍收益"}
                ],
                INCOME_ARRIVE_DATE:"2015.1.1"
            }
        }
    ],
    /*活期宝信息*/
    "act=APP4080029": [
        {
            data: {
                WEEK_RATE:"2%",
                EARN_MONEY:"1.1",
                WEEK_RATE_INCOME_LIST:[
                    {DAY_RATE:"1%",DATE:"2015.1.1"},
                    {DAY_RATE:"1%",DATE:"2015.1.1"}
                ]
            }
        }
    ],
    /*活期宝转入第二步*/
    "act=7080018": [
        /*活期购买*/
        {
            param:{
                PRODUCT_ID:"1",
                SUM:"1",
                PAY_PASSWORD:"1",
                PAY_TYPE:"1"
            },
            data: {
                RETCODE:"AAAAAAA",
                RETMSG:"123123",
                TRANSFER_DATE:"2011.11.11",
                ProfitBegin_TM:"2011.11.11",
                profitEnd_TM:"2011.11.11"
            }
        },
        /*定期购买*/
        {
            param:{
                PRODUCT_ID:"2",
                SUM:"1",
                PAY_PASSWORD:"1",
                PAY_TYPE:"1"
            },
            data:{
                INTEREST_TIMES:"2015.1.1"
            }
        }
    ],

    /*活期宝转出*/
    "act=7080019": [
        {
            param: {
                SUM: "1",
                PRODUCT_HOLD_ID:"1",
                PAY_PASSWORD:"1"
            },
            data: {
                REACH_TIME:"2015.1.1"
            }
        }
    ],
    "act=7080049": [
        {
            param: {
            },
            data: {
                ByList:[
                    {"MBL_NO":"13233331111",ORD_DT:"2016-1-1 20:11","ORD_AMT":"123"},
                    {"MBL_NO":"13355553433",ORD_DT:"2016-1-1 20:11","ORD_AMT":"12312"},
                    {"MBL_NO":"15521356453",ORD_DT:"2016-1-1 20:11","ORD_AMT":"16546"}
                ]
            }
        }
    ],
    /*定期宝详细*/
    "act=APP4080036":[
        {
            data: {
                PRODUCT_NAME:"产品名称123",
                PRODUCT_DESC:"产品描述产品描述产品描述产品描述产品描述",
                PRODUCT_DESC2:"产品描述产品描述产品描述产品描述产品描述22",
                RISK_LEVEL:"低",
                REPAYMENT_WAY:"等额本息",
                PROJECT_DURATION:"30",
                START_DATE:"2015.11.11",
                REPAYMENT_DATE:"2015.11.11",
                YEAR_INCOME_RATE:"6.5",
                PRODUCT_SUM:"9999",
                PROJECT_PROGRESS:"20",
                PROJECT_DESC:"按后台输入的内容显示,包括但不限于（项目借款人介绍、风控介绍、安全保障、计息方式等）",
                COMMON_PROBLEM:[
                    {q:"问题1",a:"回答1"},
                    {q:"问题2",a:"回答2"},
                    {q:"问题3",a:"回答3"}
                ],
                listPageHistory:[
                    {ACCNO:"1.2",ACCNO_Show:"1.2倍收益"},
                    {ACCNO:"1.5",ACCNO_Show:"1.5倍收益"},
                    {ACCNO:"2",ACCNO_Show:"2倍收益"}
                ]
            }
        }
    ],
    /*体验金购买定期宝页*/
    "act=BUYFIXEDBYFREE": [
        {
            data: {
                resultList:[
                    {MONEY:"10000",MONEY_Show:"7天体验金10000"},
                    {MONEY:"100010",MONEY_Show:"7天体验金100010"},
                    {MONEY:"100200",MONEY_Show:"7天体验金100200"}
                ],
                STARTTIME:"11月11日",
                ENDTIME:"11月12日"
            }
        }
    ],
    /*用户资产*/
    "act=7080020": [
        {
            data: {
                BALANCE:"11",
                BALANCE1:"10",
                BALANCE2:"33",
                PROFIT:"44",
                PROFIT1:"55",
                PROFIT2:"66",
                YESTDAY_PROFIT:"77",
                USERID:"88"
            }
        }
    ],
    /*账户余额*/
    "act=APP4080011":[
        {
            param:{
                USER_NO:"1",
                PAGE_NO:"",
                PAGE_NUM:""
            },
            data:{
                RETCODE:"AAAAAAA",
                INC_EXP_LIST:[
                    {
                        TRANSACTION_NAME:"交易名称",
                        TRANSACTION_DATE:"交易时间",
                        TRANSACTION_SUM:"交易金额",
                        BANKROLL_DIRECTION:"资金流向"
                    },
                    {
                        TRANSACTION_NAME:"交易名称",
                        TRANSACTION_DATE:"交易时间",
                        TRANSACTION_SUM:"交易金额",
                        BANKROLL_DIRECTION:"资金流向"
                    }
                ],
                BALANCE:10
            }
        }
    ],
    /*获取账户已经申购的活期宝信息*/
    "act=APP4080030":[
        {
            param:{
                USER_NO:"1"
            },
            data:{
                RETCODE:"AAAAAAA",
                BOUGHT_SUM:10,
                YESTERDAY_INCOME:12.1
            }
        }
    ],
    "act=7080021":[
        {
            param:{
                USER_NO:"1"
            },
            data:{
                RETCODE:"AAAAAAA",
                BOUGHT_SUM:10,
                YESTERDAY_INCOME:12.1
            }
        }
    ],
    "act=7080025":[
        {
            data:{
                RETCODE: "AAAAAAA",
                RETMSG: "通信错误！"
            }
        }
    ],
    /*提现*/
    "act=APP4080026":[
        {
            param:{
                USER_NO:"1",
                BANK_CODE:"1",
                CARD_TYPE:"1",
                CARD_NO:"1",
                SUM:"1",
                USER_TYPE:"1",
                PAY_PASSWORD:"1"
            },
            data:{
                WITHDRAW:"2015.1.1",
                EXPECTED_ARRIVAL_DATE:"2015.1.1"
            }
        }
    ],
    /*活期转出到银行卡*/
    "act=7080039":[
        {
            param:{
                PRODUCT_HOLD_ID:"1",
                SUM:"1",
                PAY_PASSWORD:"1",
                CARD_NO:"1",
                PROTOCOL_NO:"1",
                MONEY:"1"
            },
            data:{
                REACH_TIME:"2015.1.1",
                ORDER_NO:"111",
                WITHDRAW:"2015.1.2"
            }
        }
    ],
    /*活期宝购买定期宝*/
    "act=7080040":[
        {
            param:{
                PRODUCT_ID:"1",
                SUM:"1",
                PAY_PASSWORD:"1",
                PAY_TYPE:"1",
                voucherId:"1"
            },
            data:{
                RETCODE: "AAAAAAA",
                INTEREST_TIMES:"2015.1.1",
                RETMSG:"123123123123"
            }
        },
        {
            param:{
                PRODUCT_ID:"1",
                SUM:"111",
                PAY_PASSWORD:"1",
                PAY_TYPE:"1",
                voucherId:"1"
            },
            data:{
                INTEREST_TIMES:"2015.1.1"
            }
        }
    ],

    /*体验券查询*/
    "act=7080041":[
        {
            param:{
                QUERYNM:"1",//页大小
                STARTNM:"1",//页数量
                USER_NO:"1"//id
            },
            data:{
                ExperienceLs:[
                    {
                        SUM:"111",
                        NAME:"体验金111",
                        ValidityPeriod:"1天",
                        REMARK:"描述描述",
                        STATE:"01",
                        ApplicableBusiness:"适用商户",
                        VoucherId:"1"
                    },
                    {
                        SUM:"222",
                        NAME:"体验金222",
                        ValidityPeriod:"2天",
                        REMARK:"描述描述",
                        STATE:"02",
                        ApplicableBusiness:"适用商户",
                        VoucherId:"2"
                    },
                    {
                        SUM:"333",
                        NAME:"体验金222",
                        ValidityPeriod:"2天",
                        REMARK:"描述描述",
                        STATE:"01",
                        ApplicableBusiness:"适用商户",
                        VoucherId:"2"
                    },
                    {
                        SUM:"444",
                        NAME:"体验金222",
                        ValidityPeriod:"2天",
                        REMARK:"描述描述",
                        STATE:"01",
                        ApplicableBusiness:"适用商户",
                        VoucherId:"2"
                    }
                ]
            }
        }
    ]
});