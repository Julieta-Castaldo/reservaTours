import {
    AdminUsersTableTBody,
    AdminUsersTableTd, AdminUsersTableTdImg,
    AdminUsersTableTh,
    AdminUsersTableTr,
    AdminUsersTabletTHead,
    AdminUsersTableWrapper
} from "./AdminUsersTable.styled.js";
import { IconEdit } from "../../../svgs/IconEdit.jsx";
import { Link } from "react-router-dom";
import { IconTrash } from "../../../svgs/IconTrash.jsx";
import PropTypes from "prop-types";
import { MenuItem, FormControl, Select } from '@mui/material';
import { usePutUserRol } from "../../../../Hooks/Users/usePutUserRol.jsx";
import { useGlobalState } from "../../../../Context/Context.jsx";

export const AdminUsersTable = ({ data, setReloadUsers }) => {
    const [handlePutUserRol] = usePutUserRol()
    const {auth} = useGlobalState()
    // function toggleAll(source) {
    //     const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    //     checkboxes.forEach(checkbox => {
    //         checkbox.checked = source.checked;
    //     });
    // }

    return (
        <AdminUsersTableWrapper>
            <table>
                <AdminUsersTabletTHead>
                    <AdminUsersTableTr
                        background={'#58C1CE'}
                    >
                        <AdminUsersTableTh
                            width="max-content"
                            justify='center'
                        >
                            <input type="checkbox" /*onClick={toggleAll(this)}*/ />
                            <span className="selectAllLabel"></span>
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="10.8rem"
                        >
                            Nombre
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="15.1rem"
                        >

                            Apellido
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="8.9rem"
                        >
                            Email
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="13rem"
                        >
                            Estado
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="13rem"
                        >
                            Rol Actual
                        </AdminUsersTableTh>

                        <AdminUsersTableTh
                            width="12.4rem"
                            justify='center'
                        >
                            Actions
                        </AdminUsersTableTh>

                    </AdminUsersTableTr>
                </AdminUsersTabletTHead>
                <AdminUsersTableTBody>
                    {
                        data && data.length !== 0 && data.map((row) => {
                            return (
                                <AdminUsersTableTr key={row.id}>
                                    <AdminUsersTableTd
                                        width="max-content"
                                        justify='center'
                                    ><input type="checkbox" />
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="10.8rem"
                                    >
                                        {row.username}
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="15.1rem"
                                    >
                                        {row.lastname}
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="8.9rem"
                                    >
                                        {row.email}
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="13rem"
                                    >
                                        Active
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="13rem"
                                    >
                                        <FormControl variant="standard">
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={row.rol}
                                                onChange={() => {
                                                    setReloadUsers(true)
                                                    handlePutUserRol(row.id, setReloadUsers)
                                                }}
                                                disabled={auth && row.id === auth.id || row.id === 1}
                                                label="Rol"
                                                sx={{fontSize:'14px'}}
                                            >
                                                <MenuItem disabled={row.rol==='ADMIN'} value='ADMIN' sx={{fontSize:'14px'}} >Admin</MenuItem>
                                                <MenuItem disabled={row.rol==='USER'} value='USER' sx={{fontSize:'14px'}}>Client</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="12.4rem"
                                        justify='center'
                                    >
                                        <Link
                                            to='/admin/'
                                        >
                                            <IconEdit
                                                color={"#F2A63B"}
                                            />
                                        </Link>
                                        <Link
                                            to='/admin/'
                                        >
                                            <IconTrash
                                                color={"#E72328"}
                                            />
                                        </Link>
                                    </AdminUsersTableTd>
                                </AdminUsersTableTr>
                            )
                        })
                    }
                </AdminUsersTableTBody>
            </table>
        </AdminUsersTableWrapper>
    )
}

AdminUsersTable.propTypes = {
    api: PropTypes.array,
};