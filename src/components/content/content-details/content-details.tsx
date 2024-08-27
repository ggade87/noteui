import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./content-details.css";
import { Link, useParams } from "react-router-dom";
import {
  getContent,
  createContent,
  deleteContent,
  updateContent,
} from "../../store/actions/actions";
import { IContent, ContentRequest } from "../../BAL/Type";
import { ToastContainer, toast } from "react-toastify";
import { IsValid } from "../../BAL/CommonFunction";
import { RootState } from "../../store/store";
interface Props {
  subMenuId: string | undefined;
}
const ContentDetails: React.FC<Props> = ({ subMenuId }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [val, setVal] = useState("");
  const [keyEdit, setKeyEdit] = useState("");
  const [valEdit, setValEdit] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [edit, setEdit] = useState(false);
  const [tempId, setTempId] = useState("");
  const isSuccess: boolean = useSelector(
    (state: RootState) => state.home.isSuccess
  );
  const filteredContent: IContent[] = useSelector(
    (state: any) => state.home.filteredContent
  );
  useEffect(() => {
    if (IsValid(subMenuId)) {
      setDisabled(false);
      dispatch(getContent(subMenuId));
    } else {
      setDisabled(true);
      setKey("");
      setVal("");
    }
  }, [subMenuId]);

  const handleSaveContent = () => {
    if (IsValid(subMenuId) && IsValid(key) && IsValid(val)) {
      const createRequest: ContentRequest = {
        _id: "",
        smid: typeof subMenuId != "undefined" ? subMenuId : "",
        name: key,
        value: val,
      };
      dispatch(createContent(createRequest));
      //if (isSuccess) {
      setKey("");
      setVal("");
      toast.success("Conent Added.", { draggable: true });
      //}
      dispatch(getContent(subMenuId));
    } else {
      toast.error("Fill required details", { draggable: true });
    }
  };
  const handleContentUpdate = (id: string, smid: string) => {
    if (IsValid(id) && IsValid(keyEdit) && IsValid(valEdit)) {
      const updateRequest: ContentRequest = {
        _id: id,
        smid: typeof smid != "undefined" ? smid : "",
        name: keyEdit,
        value: valEdit,
      };
      dispatch(updateContent(updateRequest));
      if (isSuccess) {
        setTempId("");
        setKey("");
        setVal("");
        setKeyEdit("");
        setValEdit("");
        toast.success("Conent Updated.", { draggable: true });
      }
      dispatch(getContent(subMenuId));
    } else {
      toast.error("Fill required details", { draggable: true });
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure to delete this record?")) {
      dispatch(deleteContent(id));
      if (IsValid(id)) {
        toast.success("Item Deleted.", { draggable: true });
      }
    }
  };

  const handleEdit = (id: string, key: string, val: string) => {
    setTempId(id);
    setKeyEdit(key);
    setValEdit(val);
  };
  const handleCancel = () => {
    setTempId("");
    setKey("");
    setVal("");
    setKeyEdit("");
    setValEdit("");
  };

  return (
    <>
      <Link to={`/public/${subMenuId}`}>View Page</Link>
      <ToastContainer></ToastContainer>
      <table>
        <tr>
          <input
            type="text"
            value={key}
            minLength={1}
            maxLength={40}
            disabled={disabled}
            onChange={(event) => setKey(event.target.value)}
          ></input>
          <input
            type="text"
            value={val}
            disabled={disabled}
            onChange={(event) => setVal(event.target.value)}
          ></input>
          <button disabled={disabled} onClick={handleSaveContent}>
            Add Content
          </button>
        </tr>
      </table>
      <ul className="ContentList">
        {filteredContent != null &&
          typeof filteredContent != "undefined" &&
          filteredContent.map((data: IContent, index: number) => {
            return (
              <li key={index}>
                <table>
                  <tr>
                    <td>
                      {tempId === data._id ? (
                        <input
                          name={data._id}
                          type="text"
                          value={keyEdit}
                          minLength={1}
                          maxLength={40}
                          onChange={(event) => setKeyEdit(event.target.value)}
                        ></input>
                      ) : (
                        data.name
                      )}
                    </td>
                    <td>
                      {tempId === data._id ? (
                        <div>
                          <button
                            onClick={() =>
                              handleContentUpdate(data._id, data.smid)
                            }
                          >
                            Save
                          </button>
                          <button onClick={handleCancel}>Cancel</button>
                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            handleEdit(data._id, data.name, data.value)
                          }
                        >
                          Edit
                        </button>
                      )}
                    </td>
                    <td>
                      <button onClick={() => handleDelete(data._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {tempId === data._id ? (
                        <input
                          name={data._id}
                          type="text"
                          value={valEdit}
                          onChange={(event) => setValEdit(event.target.value)}
                        />
                      ) : (
                        data.value
                      )}
                    </td>
                  </tr>
                </table>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContentDetails;
