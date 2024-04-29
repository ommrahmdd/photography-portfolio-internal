import { useState } from "react";

import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

import { Collapse, Skeleton, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { useStore } from "../../state/store";

import CustomModal from "../customs/CustomModal";
import PrimaryBtn from "../custom-buttons/PrimaryBtn";
import SecondaryBtn from "../custom-buttons/SecondaryBtn";
import { handleSuccessMesssage } from "../../helpers/messageComponent";
import NoData from "../NoData";

import "./style.scss";
import { usePermissions } from "../../hooks/usePermissions";

export default function QuestionsList() {
  const questionsRef = collection(db, "/questions");

  const { data, isLoading: isQuestionsLoading } = useFirestoreQuery(
    ["questions"],
    questionsRef,
    {
      subscribe: true,
    }
  );

  const { setEditData } = useStore((state) => state);

  const { canUpdate } = usePermissions();

  const [messageApi, contextHolder] = message.useMessage();

  const [questionIdForDelete, setQuestionIdForDelete] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleDeleteQuestion = () => {
    let docRef = doc(db, "questions", questionIdForDelete);

    setLoading(true);
    setQuestionIdForDelete(null);

    deleteDoc(docRef).then((data) => {
      handleSuccessMesssage({
        content: "QA has been deleted successfully",
        messageMethod: messageApi,
      });
      setQuestionIdForDelete(null);
      setLoading(false);
    });
  };

  if (isQuestionsLoading)
    return (
      <div className="grid grid-cols-2 gap-10">
        {new Array(8).fill().map((_, idx) => (
          <div className="animate-pulse" key={idx}>
            <div class={` bg-cOrange h-24 w-full opacity-55`}></div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="p-5 min-h-screen">
      {contextHolder}

      {data?.docs?.length ? (
        <div className="grid gap-9 grid-cols-1 lg:grid-cols-2">
          {data?.docs?.map((el, ix) => (
            <Collapse bordered={false} key={ix}>
              <Collapse.Panel
                header={el.data().question}
                extra={
                  canUpdate && (
                    <div className="flex justify-center items-center space-x-3">
                      <EditOutlined
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditData({
                            dataForEdit: { ...el?.data(), id: el?.id },
                            isFormDrawerOpen: true,
                          });
                        }}
                        className="text-lg  transition-all duration-200 ease-in-out hover:opacity-50"
                      />
                      <DeleteOutlined
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuestionIdForDelete(el.id);
                        }}
                        className="text-lg  transition-all duration-200 ease-in-out hover:opacity-50"
                      />
                    </div>
                  )
                }
              >
                {el.data().answer}
              </Collapse.Panel>
            </Collapse>
          ))}
        </div>
      ) : (
        <NoData text="No QA exist for now." />
      )}

      <CustomModal
        isModalOpen={questionIdForDelete}
        setModalOpen={setQuestionIdForDelete}
        title="Delete question"
        secondaryText="Are you sure that you want to delete this question"
      >
        <>
          <PrimaryBtn label="yes" onClick={handleDeleteQuestion} />

          <SecondaryBtn
            label="No"
            onClick={() => setQuestionIdForDelete(null)}
          />
        </>
      </CustomModal>

      {/* Loading */}
      <CustomModal
        loading
        title="Deleting QA"
        isModalOpen={isLoading}
        setModalOpen={setLoading}
      />
    </div>
  );
}
