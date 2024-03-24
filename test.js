var array  = [6, 3, 40, 7, 2]

// 정렬을 하고싶다 ==> sort
array.sort()    // 정렬 완료!(문자열기준 정렬)
console.log(array);

// 숫자 정렬이  하고 싶으면 a(앞에꺼), b(뒤에꺼)
// 비교해서 음수가 나오면(앞이 작으면) a,b로 정렬
// 양수가 나오면(뒤가 작음) b,a로 정렬
array.sort((a,b)=>a-b)
console.log(array);


// sort로 정렬이 하고싶다
// 리턴값이 -면 a를 앞에두고
// 리턴값이 +면 b를 앞에둔다


// 문자열 정렬(알파벳순)
array = ['qwer', 'asdf', 'zxcv', 'p1']
array.sort()
console.log(array)


array = ['1234', '한글12', '가나다라']
array.sort()
console.log(array)



// 객체배열
objArray = [
    {'id':0, 'name':'홍길동'},
    {'id':2, 'name':'유관순'},
    {'id':1, 'name':'김유신'},
]

//객체배열로 정렬
objArray.sort((a,b)=>{
    // 해당 지역의 언어순으로 정렬 localeCompare
    return a['name'].localeCompare(b['name'])
})
console.log(objArray)



// filter : 내가 원하는 값(요소)만 남겨라 (return 값에 해당하는 요소만 남김)
// 아이디가 2 이상인 객체만 남기겠다
var newArray =objArray.filter((e)=>{
    return e['id'] >= 2
})

console.log(newArray)



// map : 일괄변경 (배열안에 들어있는 모드 요소를 return 값으로 변경)
var money = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var money2 = money.map(e=>{
    // return e * 1344.60
    return parseFloat((e * 1344.60).toFixed(2))
})

console.log(money)
console.log(money2)



// forEach : 배열의 각 요소를 분리해주는 배열전용 반복문
// 길이계산을 자동으로
money.forEach((e)=>{
    console.log(e)  // 안에 있는 요소들을 하나씩 돌아가면서 반복문 사용
})
