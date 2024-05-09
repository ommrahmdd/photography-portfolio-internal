import { Controller, useFormContext } from "react-hook-form";

import CustomInput from "../customs/CustomInput";

import { Input } from "antd";
import SecondaryBtn from "../custom-buttons/SecondaryBtn";
import { DeleteFilled, PlusCircleFilled } from "@ant-design/icons";

export default function SubService() {
  const { getValues, control, setValue, watch } = useFormContext();
  const { services } = getValues();

  const handleAddNewRow = () => {
    setValue(
      "services",
      [
        ...services,
        {
          title: "",
          price: "",
          features: [""],
        },
      ],
      {
        shouldDirty: true,
      }
    );
  };

  const handleAddServiceFeature = (idx, element) => {
    if (element?.trimStart())
      setValue(`services[${idx}].features`, [...services?.[idx]?.features, ""]);
  };

  const handleDeteleServiceFeature = (serviceIndex, idx) => {
    const copyOfArr = [...services?.[serviceIndex]?.features];
    copyOfArr.splice(idx, 1);
    console.log("qqqqqqqqqqqqqqqqqqqq", copyOfArr);
    setValue(`services[${serviceIndex}].features`, copyOfArr);
    console.log("qqqqqqqqqqqqqqqqqqqq2222", services[serviceIndex].features);
  };

  console.log("wwwwwwwwwwww", watch("services"));

  return (
    <CustomInput label="services" isRequired>
      <div className="max-h-[400px] overflow-auto">
        {watch("services")?.map((el, idx) => (
          <div key={idx} className="mx-3 shadow-md  p-5 mb-6">
            <CustomInput label={`title`} isRequired>
              <Controller
                name={`services.[${idx}].title`}
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </CustomInput>

            <CustomInput label="price" isRequired>
              <Controller
                name={`services.[${idx}].price`}
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </CustomInput>

            {/* ------------------------------------------------------------ Features */}
            <CustomInput label="Feature" isRequired className="w-full">
              {watch(`services[${idx}].features`)?.map((_, index) => (
                <div
                  className="flex items-center space-x-3 mb-6 px-2"
                  key={index}
                >
                  <Controller
                    name={`services[${idx}].features[${index}]`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={watch(`services[${idx}].features[${index}]`)}
                      />
                    )}
                  />
                  {index === services[idx].features?.length - 1 ? (
                    <PlusCircleFilled
                      className="text-cOrange text-2xl cursor-pointer transition duration-200 ease-in-out hover:opacity-50"
                      onClick={() =>
                        handleAddServiceFeature(
                          idx,
                          services?.[idx].features?.[index]
                        )
                      }
                    />
                  ) : (
                    <DeleteFilled
                      className="text-red-800 text-xl cursor-pointer transition duration-200 ease-in-out hover:opacity-50"
                      onClick={() => handleDeteleServiceFeature(idx, index)}
                    />
                  )}
                </div>
              ))}
            </CustomInput>

            {idx === services?.length - 1 && (
              <div className="flex justify-end mt-10">
                <SecondaryBtn
                  label="Add Another"
                  onClick={() => handleAddNewRow(idx)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </CustomInput>
  );
}
