import styled from '@emotion/styled'
import search from './assets/search.svg'

const Input = styled.input`
    width: 450px;
    height: 43px;
    border: none;
    border-radius: 67px;
    margin-left: 240px;
    margin-top: 30px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    background-image: url(${search});
    background-repeat: no-repeat;
    padding-left: 50px;
    background-position: 5% 50%;

    :focus {
        outline: none;
    }
`

const Search = () => (
    <div>
        <Input placeholder="Поиск клиента"></Input>
    </div>
)

export default Search;