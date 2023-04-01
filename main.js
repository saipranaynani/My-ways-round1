{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function FizzBuzz(sum)\{\
    let outputArr=[]\
    for(i=1;i<100;i++)\{\
        if(i%3==0 && i%4==0)\
            outputArr.push("FizzBuzz");\
        else if(i%3==0)\
            outputArr.push("Fizzz");\
        else if(i%4==0)\
            outputArr.push("Buzz");\
        else\
            outputArr.push(i);\
    \}\
    console.log(...outputArr)\
\}\
function calculateSum(number)\{\
    let sum=0;\
    while(number>=0)\{\
        sum+=(number%10);\
        number=Math.floor(number/10);\
    \}\
    return sum;\
\}\
FizzBuzz(calculateSum(9398500518))}