export default `
  <div class="input">
    <label class="input__container">
      <div class="input__label">
        {{placeholder}}
      </div>
      <input
        class="input__element"
        name="{{id}}" 
        id="{{id}}" 
        type="{{type}}" 
        placeholder=""
        value="{{value}}" 
      >
    </label>
  </div>
`;

