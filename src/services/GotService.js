/* export default class GotService {
    fetchMenu = () => {
        axios.get(SERVER_URL + '/menu')
            .then((res) => { setMenu(res.data) })
            .catch(error => { console.log(error) });
    }

    addFoodInputOnChangeHandler = (e) => {
        setAddFoodInput(e.target.value);
        console.log(addFoodInput);
    };

    onSubmitHandler = (e) => {
        e.preventDefault();
        setMenu(menu.concat({
            id: new Date(),
            food: addFoodInput
        }))
        console.log(menu);
        axios.post(SERVER_URL + '/menu', {
            id: new Date(),
            food: addFoodInput
        }).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
        setAddFoodInput('');
    };

    onPutHandler = (itemId) => {
        axios.put(SERVER_URL + '/menu/' + itemId, {
            id: itemId,
            food: addFoodInput
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        }).then(() => fetchMenu())
        setAddFoodInput('');
    }

    onDeleteHandler = (itemId) => {
        axios.delete(SERVER_URL + '/menu/' + itemId)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
                console.log(error);
            });
        setMenu(menu.filter((item) => {
            if (item.id === itemId) return false
            console.log('itemId', item.id)
            return true
        }
        )) 
    }

} */