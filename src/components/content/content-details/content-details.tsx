import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./content-details.css";
import { Link, useParams } from "react-router-dom";
import { getContent } from "../../store/actions/actions";
import { IContent } from "../../BAL/Type";
import Page from "../../hoc/SwitchingComponent";
interface Props {
  subMenuId: string | undefined;
}
const ContentDetails: React.FC<Props> = ({ subMenuId }) => {
  const dispatch = useDispatch();
  const filteredContent = useSelector(
    (state: any) => state.home.filteredContent
  );
  const { id } = useParams();
  useEffect(() => {
    handleToggle(subMenuId);
  }, [subMenuId]);
  const handleToggle = (id: string | undefined) => {
    dispatch(getContent(id));
  };
  return (
    <>
      <Link to={`/public/${subMenuId}`}>View Page</Link>
      {filteredContent && (
        <table>
          <tr>
            <input type="text"></input>
            <button>Add Content</button>
          </tr>
        </table>
      )}
      <ul>
        {filteredContent &&
          filteredContent.map((data: IContent, index: number) => {
            return (
              <li key={index}>
                <table>
                  <tr>
                    <td>{data.name}</td>

                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>{data.value}</td>
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
