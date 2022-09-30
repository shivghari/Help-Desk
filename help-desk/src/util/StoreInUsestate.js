class StoreInUsestate {
  // handle the changes in Input field to store the data in UseState

  static handleChange = (e, stateName) => {
    const { name, value } = e.target;
    stateName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
}

export default StoreInUsestate;
