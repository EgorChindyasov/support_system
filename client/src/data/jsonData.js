import {useState, useEffect} from 'react'

// const errorMessage = [
//   {id: 1, 
//    name: 'Отсутствует сигнал между детекторами КНИ и информационно-измерительной аппаратурой', 
//    content: '7 КНИ не передают сигнал информационно-измерительной аппаратуре. ' +
//    'Возможные проблемы: повреждены терморадиационностойкие кабеля, отказ ДПЗ', 
//    isItImportant: true},
//    {id: 2, 
//     name: 'Повышение температуры', content: 'В помещении № 3 повышена температура. ' + 
//     'Возможные проблемы: отказ кондиционерного оборудования', 
//     isItImportant: false}
//    ]

//    export { errorMessage }


   function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    useEffect(() => {
      fetch("/api/server")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.content}
            </li>
          ))}
        </ul>
      );
    }
  }

  export default MyComponent
