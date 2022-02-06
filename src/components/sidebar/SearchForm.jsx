import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../../actions";

function SearchForm() {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    function formSubmitHandle(e) {
        e.preventDefault()
        dispatch(searchData(inputValue))
        setInputValue("")
    }
    function inputChangeHandle(e) {
        setInputValue(e.target.value)
    }
    return (
        <form method="post" className="sidebar-form" onSubmit={formSubmitHandle}>
            <i className="fas fa-search"></i>
            <input type="text" onChange={inputChangeHandle} value={inputValue} placeholder="Search for places..." className="sidebar-form__input" />
            <i className="fas fa-map-marker-alt"></i>
        </form>
    );
}

export default SearchForm;