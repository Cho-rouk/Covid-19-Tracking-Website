 const chart=document.getElementById("canvas");
let canvas= new Chart(chart,{
    type: 'line',
    data: {
        labels: ["Jan 22 2020","Jan 23, 2020","Jan 24, 2020","Jan 25, 2020","Jan 26, 2020","Jan 27, 2020","Jan 28, 2020","Jan 29, 2020", "Jan 30, 2020","Jan 31, 2020","Feb 01, 2020","Feb 02, 2020","Feb 03, 2020","Feb 04, 2020","Feb 05, 2020","Feb 06, 2020","Feb 07, 2020","Feb 08, 2020","Feb 09, 2020","Feb 10, 2020","Feb 11, 2020","Feb 12, 2020","Feb 13, 2020","Feb 14, 2020","Feb 15, 2020","Feb 16, 2020","Feb 17, 2020","Feb 18, 2020","Feb 19, 2020","Feb 20, 2020","Feb 21, 2020","Feb 22, 2020","Feb 23, 2020","Feb 24, 2020","Feb 25, 2020","Feb 26, 2020","Feb 27, 2020","Feb 28, 2020","Feb 29, 2020","Mar 01, 2020","Mar 02, 2020","Mar 03, 2020","Mar 04, 2020","Mar 05, 2020","Mar 06, 2020","Mar 07, 2020","Mar 08, 2020","Mar 09, 2020","Mar 10, 2020","Mar 11, 2020","Mar 12, 2020","Mar 13, 2020","Mar 14, 2020","Mar 15, 2020","Mar 16, 2020","Mar 17, 2020","Mar 18, 2020","Mar 19, 2020","Mar 20, 2020","Mar 21, 2020","Mar 22, 2020","Mar 23, 2020","Mar 24, 2020","Mar 25, 2020","Mar 26, 2020","Mar 27, 2020","Mar 28, 2020","Mar 29, 2020","Mar 30, 2020","Mar 31, 2020","Apr 01, 2020","Apr 02, 2020","Apr 03, 2020","Apr 04, 2020","Apr 05, 2020","Apr 06, 2020","Apr 07, 2020","Apr 08, 2020","Apr 09, 2020","Apr 10, 2020","Apr 11, 2020","Apr 12, 2020","Apr 13, 2020","Apr 14, 2020","Apr 15, 2020","Apr 16, 2020","Apr 17, 2020","Apr 18, 2020","Apr 19, 2020","Apr 20, 2020","Apr 21, 2020","Apr 22, 2020","Apr 23, 2020","Apr 24, 2020","Apr 25, 2020","Apr 26, 2020","Apr 27, 2020","Apr 28, 2020","Apr 29, 2020","Apr 30, 2020","May 01, 2020","May 02, 2020","May 03, 2020","May 04, 2020","May 05, 2020","May 06, 2020","May 07, 2020","May 08, 2020","May 09, 2020","May 10, 2020","May 11, 2020","May 12, 2020","May 13, 2020","May 14, 2020","May 15, 2020","May 16, 2020","May 17, 2020","May 18, 2020","May 19, 2020","May 20, 2020","May 21, 2020","May 22, 2020","May 23, 2020","May 24, 2020","May 25, 2020","May 26, 2020","May 27, 2020","May 28, 2020","May 29, 2020","May 30, 2020","May 31, 2020","Jun 01, 2020","Jun 02, 2020","Jun 03, 2020","Jun 04, 2020","Jun 05, 2020","Jun 06, 2020","Jun 07, 2020","Jun 08, 2020","Jun 09, 2020","Jun 10, 2020","Jun 11, 2020","Jun 12, 2020","Jun 13, 2020","Jun 14, 2020","Jun 15, 2020","Jun 16, 2020","Jun 17, 2020","Jun 18, 2020","Jun 19, 2020","Jun 20, 2020","Jun 21, 2020","Jun 22, 2020","Jun 23, 2020","Jun 24, 2020","Jun 25, 2020","Jun 26, 2020","Jun 27, 2020","Jun 28, 2020","Jun 29, 2020","Jun 30, 2020","Jul 01, 2020","Jul 02, 2020","Jul 03, 2020","Jul 04, 2020","Jul 05, 2020","Jul 06, 2020","Jul 07, 2020","Jul 08, 2020","Jul 09, 2020","Jul 10, 2020","Jul 11, 2020","Jul 12, 2020","Jul 13, 2020","Jul 14, 2020","Jul 15, 2020","Jul 16, 2020","Jul 17, 2020","Jul 18, 2020","Jul 19, 2020","Jul 20, 2020","Jul 21, 2020","Jul 22, 2020","Jul 23, 2020","Jul 24, 2020","Jul 25, 2020","Jul 26, 2020","Jul 27, 2020","Jul 28, 2020","Jul 29, 2020","Jul 30, 2020","Jul 31, 2020","Aug 01, 2020","Aug 02, 2020","Aug 03, 2020","Aug 04, 2020","Aug 05, 2020","Aug 06, 2020","Aug 07, 2020","Aug 08, 2020","Aug 09, 2020","Aug 10, 2020","Aug 11, 2020","Aug 12, 2020","Aug 13, 2020","Aug 14, 2020","Aug 15, 2020","Aug 16, 2020","Aug 17, 2020","Aug 18, 2020","Aug 19, 2020","Aug 20, 2020","Aug 21, 2020","Aug 22, 2020","Aug 23, 2020","Aug 24, 2020","Aug 25, 2020","Aug 26, 2020","Aug 27, 2020","Aug 28, 2020","Aug 29, 2020","Aug 30, 2020","Aug 31, 2020","Sep 01, 2020","Sep 02, 2020","Sep 03, 2020","Sep 04, 2020","Sep 05, 2020","Sep 06, 2020","Sep 07, 2020","Sep 08, 2020","Sep 09, 2020","Sep 10, 2020","Sep 11, 2020","Sep 12, 2020","Sep 13, 2020","Sep 14, 2020","Sep 15, 2020","Sep 16, 2020","Sep 17, 2020","Sep 18, 2020","Sep 19, 2020","Sep 20, 2020","Sep 21, 2020","Sep 22, 2020","Sep 23, 2020","Sep 24, 2020","Sep 25, 2020","Sep 26, 2020","Sep 27, 2020","Sep 28, 2020","Sep 29, 2020","Sep 30, 2020","Oct 01, 2020","Oct 02, 2020","Oct 03, 2020","Oct 04, 2020","Oct 05, 2020","Oct 06, 2020","Oct 07, 2020","Oct 08, 2020","Oct 09, 2020","Oct 10, 2020","Oct 11, 2020","Oct 12, 2020","Oct 13, 2020","Oct 14, 2020","Oct 15, 2020","Oct 16, 2020","Oct 17, 2020","Oct 18, 2020","Oct 19, 2020","Oct 20, 2020","Oct 21, 2020","Oct 22, 2020","Oct 23, 2020","Oct 24, 2020","Oct 25, 2020","Oct 26, 2020","Oct 27, 2020","Oct 28, 2020","Oct 29, 2020","Oct 30, 2020","Oct 31, 2020","Nov 01, 2020","Nov 02, 2020","Nov 03, 2020","Nov 04, 2020","Nov 05, 2020","Nov 06, 2020","Nov 07, 2020","Nov 08, 2020","Nov 09, 2020","Nov 10, 2020","Nov 11, 2020","Nov 12, 2020","Nov 13, 2020","Nov 14, 2020","Nov 15, 2020","Nov 16, 2020","Nov 17, 2020","Nov 18, 2020","Nov 19, 2020","Nov 20, 2020","Nov 21, 2020","Nov 22, 2020","Nov 23, 2020","Nov 24, 2020","Nov 25, 2020","Nov 26, 2020","Nov 27, 2020","Nov 28, 2020","Nov 29, 2020","Nov 30, 2020","Dec 01, 2020","Dec 02, 2020","Dec 03, 2020","Dec 04, 2020","Dec 05, 2020","Dec 06, 2020","Dec 07, 2020","Dec 08, 2020","Dec 09, 2020","Dec 10, 2020","Dec 11, 2020","Dec 12, 2020","Dec 13, 2020","Dec 14, 2020","Dec 15, 2020","Dec 16, 2020","Dec 17, 2020","Dec 18, 2020","Dec 19, 2020","Dec 20, 2020","Dec 21, 2020","Dec 22, 2020","Dec 23, 2020","Dec 24, 2020","Dec 25, 2020","Dec 26, 2020","Dec 27, 2020","Dec 28, 2020","Dec 29, 2020","Dec 30, 2020","Dec 31, 2020","Jan 01, 2021","Jan 02, 2021","Jan 03, 2021","Jan 04, 2021","Jan 05, 2021","Jan 06, 2021","Jan 07, 2021","Jan 08, 2021","Jan 09, 2021","Jan 10, 2021","Jan 11, 2021","Jan 12, 2021","Jan 13, 2021","Jan 14, 2021","Jan 15, 2021","Jan 16, 2021","Jan 17, 2021","Jan 18, 2021","Jan 19, 2021","Jan 20, 2021","Jan 21, 2021","Jan 22, 2021","Jan 23, 2021","Jan 24, 2021","Jan 25, 2021","Jan 26, 2021","Jan 27, 2021","Jan 28, 2021","Jan 29, 2021","Jan 30, 2021","Jan 31, 2021","Feb 01, 2021","Feb 02, 2021","Feb 03, 2021","Feb 04, 2021","Feb 05, 2021","Feb 06, 2021","Feb 07, 2021","Feb 08, 2021","Feb 09, 2021","Feb 10, 2021","Feb 11, 2021","Feb 12, 2021","Feb 13, 2021","Feb 14, 2021","Feb 15, 2021","Feb 16, 2021","Feb 17, 2021","Feb 18, 2021","Feb 19, 2021","Feb 20, 2021","Feb 21, 2021","Feb 22, 2021","Feb 23, 2021","Feb 24, 2021","Feb 25, 2021","Feb 26, 2021","Feb 27, 2021","Feb 28, 2021","Mar 01, 2021","Mar 02, 2021","Mar 03, 2021","Mar 04, 2021","Mar 05, 2021","Mar 06, 2021","Mar 07, 2021","Mar 08, 2021","Mar 09, 2021","Mar 10, 2021","Mar 11, 2021","Mar 12, 2021","Mar 13, 2021","Mar 14, 2021","Mar 15, 2021","Mar 16, 2021","Mar 17, 2021","Mar 18, 2021","Mar 19, 2021","Mar 20, 2021","Mar 21, 2021","Mar 22, 2021","Mar 23, 2021","Mar 24, 2021","Mar 25, 2021","Mar 26, 2021","Mar 27, 2021","Mar 28, 2021","Mar 29, 2021","Mar 30, 2021","Mar 31, 2021","Apr 01, 2021","Apr 02, 2021","Apr 03, 2021","Apr 04, 2021","Apr 05, 2021","Apr 06, 2021","Apr 07, 2021","Apr 08, 2021","Apr 09, 2021","Apr 10, 2021","Apr 11, 2021","Apr 12, 2021","Apr 13, 2021","Apr 14, 2021","Apr 15, 2021","Apr 16, 2021","Apr 17, 2021","Apr 18, 2021","Apr 19, 2021","Apr 20, 2021","Apr 21, 2021","Apr 22, 2021","Apr 23, 2021","Apr 24, 2021","Apr 25, 2021","Apr 26, 2021","Apr 27, 2021","Apr 28, 2021","Apr 29, 2021","Apr 30, 2021","May 01, 2021","May 02, 2021","May 03, 2021","May 04, 2021","May 05, 2021","May 06, 2021","May 07, 2021","May 08, 2021","May 09, 2021","May 10, 2021","May 11, 2021","May 12, 2021","May 13, 2021","May 14, 2021","May 15, 2021","May 16, 2021","May 17, 2021","May 18, 2021","May 19, 2021","May 20, 2021","May 21, 2021","May 22, 2021","May 23, 2021","May 24, 2021","May 25, 2021","May 26, 2021","May 27, 2021","May 28, 2021","May 29, 2021","May 30, 2021","May 31, 2021","Jun 01, 2021","Jun 02, 2021","Jun 03, 2021","Jun 04, 2021","Jun 05, 2021","Jun 06, 2021","Jun 07, 2021","Jun 08, 2021","Jun 09, 2021","Jun 10, 2021","Jun 11, 2021","Jun 12, 2021","Jun 13, 2021","Jun 14, 2021","Jun 15, 2021","Jun 16, 2021","Jun 17, 2021","Jun 18, 2021","Jun 19, 2021","Jun 20, 2021","Jun 21, 2021","Jun 22, 2021","Jun 23, 2021","Jun 24, 2021","Jun 25, 2021","Jun 26, 2021","Jun 27, 2021","Jun 28, 2021","Jun 29, 2021","Jun 30, 2021","Jul 01, 2021","Jul 02, 2021","Jul 03, 2021","Jul 04, 2021","Jul 05, 2021","Jul 06, 2021","Jul 07, 2021","Jul 08, 2021","Jul 09, 2021","Jul 10, 2021","Jul 11, 2021","Jul 12, 2021","Jul 13, 2021","Jul 14, 2021","Jul 15, 2021","Jul 16, 2021","Jul 17, 2021","Jul 18, 2021","Jul 19, 2021","Jul 20, 2021","Jul 21, 2021","Jul 22, 2021","Jul 23, 2021","Jul 24, 2021","Jul 25, 2021","Jul 26, 2021","Jul 27, 2021","Jul 28, 2021","Jul 29, 2021","Jul 30, 2021","Jul 31, 2021","Aug 01, 2021","Aug 02, 2021","Aug 03, 2021","Aug 04, 2021","Aug 05, 2021","Aug 06, 2021","Aug 07, 2021","Aug 08, 2021","Aug 09, 2021","Aug 10, 2021","Aug 11, 2021","Aug 12, 2021","Aug 13, 2021","Aug 14, 2021","Aug 15, 2021","Aug 16, 2021","Aug 17, 2021","Aug 18, 2021","Aug 19, 2021","Aug 20, 2021","Aug 21, 2021","Aug 22, 2021","Aug 23, 2021","Aug 24, 2021","Aug 25, 2021","Aug 26, 2021","Aug 27, 2021","Aug 28, 2021","Aug 29, 2021","Aug 30, 2021","Aug 31, 2021","Sep 01, 2021","Sep 02, 2021","Sep 03, 2021","Sep 04, 2021","Sep 05, 2021","Sep 06, 2021","Sep 07, 2021","Sep 08, 2021","Sep 09, 2021","Sep 10, 2021","Sep 11, 2021","Sep 12, 2021","Sep 13, 2021","Sep 14, 2021","Sep 15, 2021","Sep 16, 2021","Sep 17, 2021","Sep 18, 2021","Sep 19, 2021","Sep 20, 2021","Sep 21, 2021","Sep 22, 2021","Sep 23, 2021","Sep 24, 2021","Sep 25, 2021","Sep 26, 2021","Sep 27, 2021","Sep 28, 2021","Sep 29, 2021","Sep 30, 2021","Oct 01, 2021","Oct 02, 2021","Oct 03, 2021","Oct 04, 2021","Oct 05, 2021","Oct 06, 2021","Oct 07, 2021","Oct 08, 2021","Oct 09, 2021","Oct 10, 2021","Oct 11, 2021","Oct 12, 2021","Oct 13, 2021","Oct 14, 2021","Oct 15, 2021","Oct 16, 2021","Oct 17, 2021","Oct 18, 2021","Oct 19, 2021","Oct 20, 2021","Oct 21, 2021","Oct 22, 2021","Oct 23, 2021","Oct 24, 2021","Oct 25, 2021","Oct 26, 2021","Oct 27, 2021","Oct 28, 2021","Oct 29, 2021","Oct 30, 2021","Oct 31, 2021","Nov 01, 2021","Nov 02, 2021","Nov 03, 2021","Nov 04, 2021","Nov 05, 2021","Nov 06, 2021","Nov 07, 2021","Nov 08, 2021","Nov 09, 2021","Nov 10, 2021","Nov 11, 2021","Nov 12, 2021","Nov 13, 2021","Nov 14, 2021","Nov 15, 2021","Nov 16, 2021","Nov 17 2021","Nov 18, 2021","Nov 19, 2021","Nov 20, 2021","Nov 21, 2021","Nov 22, 2021","Nov 23, 2021","Nov 24, 2021","Nov 25, 2021","Nov 26, 2021","Nov 27, 2021","Nov 28, 2021","Nov 29, 2021","Nov 30, 2021","Dec 01, 2021","Dec 02, 2021","Dec 03, 2021","Dec 04, 2021","Dec 05, 2021","Dec 06, 2021","Dec 07, 2021","Dec 08, 2021","Dec 09, 2021","Dec 10, 2021","Dec 11, 2021","Dec 12, 2021","Dec 13, 2021","Dec 14, 2021","Dec 15, 2021","Dec 16, 2021","Dec 17, 2021","Dec 18, 2021","Dec 19, 2021","Dec 20, 2021","Dec 21, 2021","Dec 22, 2021","Dec 23, 2021","Dec 24, 2021","Dec 25, 2021","Dec 26, 2021","Dec 27, 2021","Dec 28, 2021","Dec 29, 2021","Dec 30, 2021","Dec 31, 2021","Jan 01, 2022","Jan 02, 2022","Jan 03, 2022","Jan 04, 2022","Jan 05, 2022","Jan 06, 2022","Jan 07, 2022"],
        datasets:[
            {
                label: "Cases",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(236,37,90,0.8)",
                borderColor: "rgba(236,37,90,0.8)",
                borderCapstyle: 'butt',
                borderDash:[],
                borderDashOffset: 0.0,
                borderJoinStyle:'miter',
                pointBorderColor:"rgba(236,37,90,0.8)",
                pointBackgroundColor:"#000",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(236,37,90,0.8)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data:[970,1198,1650,2325,3086,4835,6244,7948,9873,11892,14388,17011,20061,23657,27046,29768,32614,34604,36871,38612,39812,52662,56893,58053,58702,59319,59513,59416,58029,56775,55349,54532,52661,51097,49310,47655,45341,44184,43434,43202,42759,43142,43644,45777,48716,51784,55296,60528,66460,75716,87407,101398,115021,131629,149541,169593,193802,222104,255619,284047,316172,354598,391304,432570,481624,535094,589223,636847,681853,739102,794247,845676,904065,957388,1004454,1055401,1099598,1146172,1196839,1260309,1304696,1346349,1387960,1415979,1452633,1485803,1531831,1570758,1601767,1647850,1677122,1714990,1754495,1769631,1805900,1844110,1856028,1884986,1918178,1954379,1995031,2024158,2063344,2097307,2123140,2150711,2193088,2233542,2250035,2271457,2296129,2310748,2326413,2366801,2398388,2428716,2458614,2485914,2515459,2542749,2575827,2553995,2581459,2604790,2615989,2626247,2651387,2668168,2711732,2740186,2724562,2754301,2750722,2702748,2736698,2775900,2814575,2868769,2888430,2933559,2923721,2942992,2986254,2999836,3034666,3056830,3081509,3101440,3134292,3189748,3220434,3237418,3283158,3316472,3346243,3429595,3480863,3550578,3613066,3656575,3700196,3762681,3766423,3839950,3891051,3969460,4026934,4023667,4056957,4119549,4202094,4266205,4350596,4421719,4489929,4527696,4525296,4582817,4651417,4742682,4765885,4796550,4824461,4904097,4997376,5057674,5136577,5162363,5176371,5221981,5257628,5315097,5394552,5458196,5443631,5458353,5477099,5557509,5643165,5727005,5705222,5697122,5699364,5711545,5770747,5827293,5893364,5872637,5838731,5832969,5841011,5885944,5947227,6001054,6028201,5960126,5955950,5949905,5993969,6066537,6107357,6122154,6126166,6121364,6144097,6198206,6226485,6283175,6298683,6264010,6255157,6254995,6297168,6356384,6400225,6417055,6398467,6403001,6423806,6478050,6482238,6518292,6506302,6446754,6424075,6429974,6470933,6522413,6563474,6571955,6544091,6546239,6551997,6605467,6680179,6724904,6728936,6725427,6738074,6796062,6880464,6959310,7085660,7113552,7107480,7147122,7211280,7323734,7425164,7556828,7644183,7709714,7798916,7917695,8095397,8305070,8503272,8663488,8746589,8903158,9096001,9336001,9593942,9815099,9975928,10108569,10258451,10453717,10716660,10992077,11272235,11485402,11619453,11801625,12055825,12093729,12346252,12529600,12696895,12762562,12781358,12909323,13084164,13277131,13404286,13497975,13534318,13594556,13570271,13688078,13724554,13795781,13837535,13774416,13778143,13802211,13919556,14054213,14126864,14223571,14201838,14226841,14262392,14378222,14472620,14570621,14677624,14664715,14698269,14777937,14943973,15148880,15219451,15352856,15315449,15346952,15442954,15578051,15680022,15637116,15619857,15523975,15548876,15666306,15886658,16104678,16136281,16238996,16116864,16277191,16481703,16778534,17133619,17360251,17574918,17609514,17700586,17894967,18041477,18206976,18353687,18444964,18392938,18253384,18266067,18357165,18478508,18567284,18609781,18425562,18328754,18355884,18328320,18363868,18365758,18355615,18066882,17915735,17790498,17723586,17690805,17581056,17479495,17247183,17052591,16857272,16761983,16664096,16568888,16436605,16219814,16024843,15892906,15781298,15705547,15611961,15522472,15322753,15176766,15109533,15073080,15047354,14967077,14894953,14740785,14635919,14647214,14607216,14604802,14562988,14559539,14393903,14325920,14354245,14381647,14440431,14489288,14501729,14420513,14401628,14472146,14510288,14618793,14721314,14781953,14683152,14630230,14669814,14777449,14941236,15085406,15182913,15137968,15151141,15261219,15431790,15610699,15689836,15760934,15707498,15725939,15824567,15997361,16209164,16368196,16464285,16449985,16535572,16701257,16892135,17076862,17243581,17299661,17256747,17319533,17427497,17578360,17740829,17833753,17902330,17763668,17766907,17827411,17914429,17952812,17910352,17877960,17726292,17598770,17606532,17622060,17672676,17590400,17513608,17304750,17183853,17084645,17010078,16906409,16710584,16522838,16227454,15976523,15838844,15704378,15582563,15411034,15279221,14977933,14768512,14611721,14480904,14344527,14178564,14025259,13787960,13533985,13366483,13266318,13179478,13027884,12860202,12592190,12398552,12276269,12207120,12165811,12000630,11919917,11757272,11656595,11588271,11572780,11546703,11514242,11461023,11331059,11278560,11302523,11371538,11432672,11432858,11432649,11376481,11333222,11349920,11409942,11479268,11526160,11557999,11509784,11512349,11590856,11697382,11817534,11899962,11924287,11909713,12002147,12175904,12377716,12581027,12750074,12878341,12911241,13043063,13191690,13357873,13507246,13692343,13850820,13881454,14012648,14219582,14459618,14695964,14883936,15036985,15093756,15233333,15459463,15682788,15902033,16060773,16171670,16150988,16192613,16292808,16425118,16638131,16758024,16831856,16796697,16869721,17007644,17205947,17410125,17537946,17633475,17584656,17645152,17805624,17975833,18167221,18285475,18370050,18321779,18358173,18406437,18537706,18685057,18731946,18764386,18672593,18606148,18588573,18498439,18523985,18561797,18564842,18397357,18305553,18295050,18353644,18420026,18421014,18384988,18237571,18179608,18155016,18173457,18247453,18237886,18212584,18082579,17967646,17933645,17946417,17952331,17911032,17837787,17619799,17531419,17482932,17504506,17495952,17511414,17489987,17396398,17296566,17306031,17355921,17393362,17430798,17440378,17344105,17300820,17353050,17430730,17478195,17528228,17558502,17453227,17475000,17518888,17622995,17709654,17788969,17840078,17783613,17786834,17821405,17934518,18058443,18156149,18207996,18146912,18163777,18270663,18432166,18532031,18621588,18681630,18680176,18729701,18832864,19010941,19159142,19273373,19356235,19391066,19494317,19636727,19810146,19965591,20069909,20155900,20149023,20234272,20426428,20681257,20913860,21111123,21252447,21224470,21340060,21484123,21659966,21857490,21982050,22095704,22053298,22115707,22279485,22492658,22652980,22841551,22981696,22939794,23062296,23379798,23812028,24282158,24723407,24982952,25312738,25885169,26913345,28250669,29648729,30912245,31764997,32556812,33999476,35922342,37895417,39908418]
            }
        ]
    }
} );