<!--  -->
<template>
  <div class="">
    <ul>
      <li v-for="item in yama" :key="item.id">
        <button @click="jump(item)">转阎王殿</button>
        <router-link tag="li" replace="true" :to="{name:'YanWangDian',query:{id:item.id,name:item.name,run:item.run} }">{{item.name}}</router-link>
      </li> 
      <div class="Dian">
     <router-view></router-view>
    </div>
    </ul>
   <h1>666666</h1>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      yama: [
        {
          id: "壹殿",
          name: '【壹殿】-----【秦广王】',
          run: "专司人间夭寿生死，统管幽冥吉凶、善人寿终，接引超升；功过两半者，送交第十殿发放，仍投入世间，男转为女，女转为男。恶多善少者，押赴殿右高台，名曰孽镜台，令之一望，照见在世之心好坏，随即批解第二殿，发狱受苦。"

        },
        {
          id: "贰殿",
          name: "【贰殿】-----【楚江王】",
          run: "司掌活大地狱，又名剥衣亭寒冰地狱，另设十六小地狱，凡在阳间伤人肢体、奸盗杀生者，推入此狱，另发入到十六小狱受苦，满期转解第三殿，加刑发狱。"
        },
        {
          id: "叁殿",
          name: '【叁殿】-----【宋帝王】',
          run: "司掌黑绳大地狱，另设十六小狱，凡阳世忤逆尊长，教唆兴讼者，推入此狱，受倒吊、挖眼、刮骨之刑，刑满转解第四殿。"
        },
        {
          id: "肆殿",
          name: "【肆殿】-----【仵官王】",
          run: "司掌合大地狱，又名剥剹血池地狱，另设十六小地狱，凡世人抗粮赖租，交易欺诈者，推入此狱，另再判以小狱受苦，满日送解第五殿察核。"
        },
        {
          id:"伍殿",
          name: "【伍殿】-----【阎罗王】",
          run: "前本居第一殿，因怜屈死，屡放还阳伸雪，降调此殿。司掌叫唤大地狱，并十六诛心小狱。凡解到此殿者，押赴望乡台，令之闻见世上本家，因罪遭殃各事，随即推入此狱，细查曾犯何恶，再发入诛心十六小狱，钩出其心，掷与蛇食，铡其身首（包公即善于用铡刀），受苦满日，另发别殿。"

        },
        {
          id:"陆殿",
          name: "【陆殿】-----【卞城王】",
          run: "司掌大叫唤大地狱，及枉死城，另设十六小地狱。忤逆不孝者，被两小鬼用锯分尸。凡世人怨天尤地，对北溺便涕泣者，发入此狱。查所犯事件，亦要受到铁锥打、火烧舌之刑罚。再发小狱受苦，满日转解第七殿，再查有无别恶。"
        },
        {
          id: "柒殿",
          name: "【柒殿】-----【泰山王】",
          run: '司掌热恼地狱，又名碓磨肉酱地狱，另设十六小地狱。凡阳世取骸合药、离人至戚者，发入此狱。再发小狱。受苦满日，转解第八殿，收狱查治。又，凡盗窃、诬告、敲诈、谋财害命者，均将遭受下油锅之刑罚。'
        },
        {
          id:"捌殿",
          name: "【捌殿】-----【都市王】",
          run: "司掌大热大恼大地狱，又名恼闷锅地狱，另设十六小地狱。凡在世不孝，使父母翁姑愁闷烦恼者，掷入此狱。再交各小狱加刑，受尽痛苦，解交第九殿，改头换面，永为畜类。"
        },
        {
          id: "玖殿",
          name: "【玖殿】-----【平等王】",
          run: "司掌丰都城铁网阿鼻地狱，另设十六小狱。凡阳世杀人放火、斩绞正法者，解到本殿，用空心铜桩，链其手足相抱，煽火焚烧，烫烬心肝，随发阿鼻地狱受刑。直到被害者个个投生，方准提出，解交第十殿发生六道（天道、人道、地道、阿修罗道、地狱道、畜生道）。"
        },
        {
          id:"拾殿",
          name: "【拾殿】-----【转轮王】",
          run: "专司各殿解到鬼魂，分别善恶，核定等级，发四大部洲投生。男女寿夭，富贵贫贱，逐名详细开载，每月汇知第一殿注册。凡有作孽极恶之鬼，着令更变卵胎湿化，朝生暮死，罪满之后，再复人生，投胎蛮夷之地。凡发往投生者，先令押交孟婆神，酴忘台下，灌饮迷汤，使忘前生之事"
        },
      ]
    }
  },
  methods:{
    jump(item){
      this.$router.push({
        name:"YanWangDian",
        params:item
      })

    }
  },
  created() {

  },
  mounted() {
    console.log(123)
  }
  
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
ul {
  width: 1200px;
  height: 500px;
  border: 1px solid red;
  margin: auto;
  list-style: none;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  font-family: "中华楷体";
  line-height: 30px;
 flex-wrap: wrap
}

ul li {
  text-align: left;
  flex: 1;
  flex-grow: 1;
  flex-basis:auto;
  flex-shrink: 1;
  width:200px;
  cursor: pointer;

}
.Dian{
width:500px;
height:500px;
border:1px dashed red
}
</style>