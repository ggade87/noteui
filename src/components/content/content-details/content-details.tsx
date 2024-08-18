import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./content-details.css";
import { useParams } from "react-router-dom";
import { getContent } from "../../store/actions/actions";
import { IContent } from "../../BAL/Type";
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
      ContentDetails {subMenuId}
      <ul>
        {filteredContent &&
          filteredContent.map((data: IContent, index: number) => {
            return <li key={index}>{data.name}</li>;
          })}
      </ul>
    </>
  );
};

export default ContentDetails;
