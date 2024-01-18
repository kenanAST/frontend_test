import Select from "react-select";

type ControlsProps = {
  sortField: string;
  sortDirection: string;
  setSortField: React.Dispatch<React.SetStateAction<string>>;
  setSortDirection: React.Dispatch<React.SetStateAction<string>>;
};

const Controls = ({
  sortField,
  sortDirection,
  setSortField,
  setSortDirection,
}: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company.name" },
    { label: "Email", value: "email" },
  ];

  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          value={fieldOptions.find((option) => option.value === sortField)}
          onChange={(selectedOption) =>
            setSortField(selectedOption ? selectedOption.value : "name")
          }
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          value={directionOptions.find(
            (option) => option.value === sortDirection
          )}
          onChange={(selectedOption) =>
            setSortDirection(
              selectedOption ? selectedOption.value : "ascending"
            )
          }
        />
      </div>
    </div>
  );
};

export default Controls;