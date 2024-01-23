
export const base = {

  fetchLabels:function (time=1000) {
    console.log("获取label ...")
    return new Promise((resolve)=>{
      setTimeout(() => {
        const data = [
          {
            "id":0,
            "name":"做好发型再出门",
            "selected":null,
          },
          {
            "id":1,
            "name":"爱运动",
            "selected":null,
          },
          {
            "id":2,
            "name":"音乐",
            "selected":null,
          },
          {
            "id":3,
            "name":"每年至少旅行一次",
            "selected":null,
          },
          {
            "id":4,
            "name":"喜欢看电影",
            "selected":null,
          },
          {
            "id":5,
            "name":"创过业",
            "selected":null,
          },
          {
            "id":6,
            "name":"猫奴",
            "selected":null,
          },
          {
            "id":7,
            "name":"打开正确即话痨",
            "selected":null,
          },
          {
            "id":8,
            "name":"吵过架",
            "selected":null,
          },
          {
            "id":9,
            "name":"留过学",
            "selected":null,
          },
          {
            "id":10,
            "name":"动漫",
            "selected":null,
          },
          {
            "id":11,
            "name":"好孩子",
            "selected":null,
          },
          {
            "id":12,
            "name":"逃过学",
            "selected":null,
          }
        ]
        resolve({
          data
        })
        // this.labels.push(...data)
      }, time)
    })
  },
}

export default {
  base
}
