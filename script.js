/* const ym2210  = ['흑금성', '제로코크']
const ym2211  = ['데자와', '솔의눈', '정체불명']

const 글 = [...ym2211, ...ym2210]
const 카테고리 = ["글", "미분류"]

const 미분류 = ["정체불명", "흑금성"]

*/

const 전체글 = {
  ['+20221111'] : {
    수필 : ['데자와'],
    정체불명 : ['수성']
  },
  ['+20221110'] : {
    수필 : ['솔의눈'],
    정체불명 : ['금성', '지구']
  },
  ['+20221008'] : {
    수필 : ['제로코크'],
    정체불명 : ['목성', '토성']
  },
  ['+20220909'] : {
    수필 : ['하늘보리']
  },
  ['+20220708'] : {
    정체불명 : ['천왕성', '달']
  }
}

const Categories = ['수필', '정체불명'];
const 글 = GetAllPosts();
const 수필 = GetByCategory('수필');
const 정체불명 = GetByCategory('정체불명')

// 모든 글 배열 만들기
function GetAllPosts(){
  let AllPosts = [];
  for(let key in 전체글){
    for(i = 0; i < Categories.length; i++){
      if(전체글[key][Categories[i]] !== undefined){
      AllPosts = AllPosts.concat(전체글[key][Categories[i]])
    }
  }
  }
  return AllPosts
}

// 카테고리의 글 배열 만들기
function GetByCategory(CategoryName){
  let CategoryPosts = [];
  for(let key in 전체글){
    if(전체글[key][CategoryName] !== undefined){
    CategoryPosts = CategoryPosts.concat(전체글[key][CategoryName])
    }
  }
    return CategoryPosts
}

// 한 달 단위로 글 배열 만들기
function GetByMonth(x, y){
  let a = (x.toString() + Plus0(y)) * 100;
  let b = (x.toString() + Plus0(y+1)) * 100;
  let c = [];
  for(let key in 전체글){
    console.log(a, key, b);
    if(a < key && key < b){
      for(i = 0; i < Categories.length; i++){
        c = c.concat(전체글[key][Categories[i]])
      }
   }
 }
  return c
}

function RightMonthList(){
  let a = [];
  for(let key in 전체글){
    if(Slice(key, 5, 7) < 10){
      let b = Slice(key, 1, 5) + '년 ' + Slice(key, 6, 7) + '월';
      a = a.concat('<p><a href="' + b + '.html">' + b + '</a></p>');
    }
    else{
      let c = Slice(key, 1, 5) + '년 ' + Slice(key, 5, 7) + '월';
      a = a.concat('<p><a href="' + c + '.html">' + c + '</a></p>');
    }
      }
      let d = [...new Set(a)];
      for(i = 0; i < d.length; i++){
        document.write(d[i]);
  }
}

function Slice(x, y, z){
  return x.slice(y, z)
}

const Day = new Date();
const Year = Day.getFullYear().toString()
const ModifiedMonth = Plus0(Day.getMonth())
const ModifiedDay = Plus0(Day.getDate())
const NowDate = Year + ModifiedMonth + ModifiedDay
// -> ModifiedYear가 선언할 때 문자열이 돼서 나머지 둘이 숫자라도 문자열로 변환 안 해도 됨!
// -> 문자 + 숫자 백만 개 = 문자

function Plus0(a){
  if(a < 10){
    a = '0' + a
  }
  return a
}

function MainTitle(){
document.write('<h1><a href='+ 글[0] +'.html>ungbi</a></h1>')
}

function TitleAndNumber(classificater){
return classificater.indexOf(document.querySelector('h4').textContent)
}

function PrevAndNext(classificater){
  if(classificater.length === 1){
    document.write('<table align="center"><tr><th>이전 글</th><th>&nbsp&nbsp&nbsp</th><th>다음 글</th></tr></table>')
  }
  else if(TitleAndNumber(classificater) === 0){
    document.write('<table align="center"><tr><th>이전 글</th><th>&nbsp&nbsp&nbsp</th><th><a href="'+classificater[TitleAndNumber(classificater)+1]+'.html">다음 글</a></th></tr></table>')
  }
  else if(TitleAndNumber(classificater) === classificater.length - 1){
      document.write('<table align="center"><tr><th><a href="'+classificater[TitleAndNumber(classificater)-1]+'.html">이전 글</a></th><th>&nbsp&nbsp&nbsp</th><th>다음 글</a></th></tr></table>')
    }
    else{
      document.write('<table align="center"><tr><th><a href="'+classificater[TitleAndNumber(classificater)-1]+'.html">이전 글</a></th><th>&nbsp&nbsp&nbsp</th><th><a href="'+classificater[TitleAndNumber(classificater)+1]+'.html">다음 글</a></th></tr></table>')
    }
}

function PostList(CategoryName){
  for(i = 0; i < CategoryName.length; i++){
    if(CategoryName[i] !== undefined)
    document.write('<a href='+ CategoryName[i] + '.html>' + CategoryName[i] + '</a><br>')
  }
}

function RightCategoryList(){
  for(i = 0; i < Categories.length; i++){
    document.write('<p><a href="' + Categories[i] + '.html">' + Categories[i] + '</a></p>')
  }
}
