import Mock from 'mockjs'

Mock.mock('/getData',{
    'list|20':[
        {'id|+1':1,'title':'@ctitle','num|1000-10000':0}
    ]
})