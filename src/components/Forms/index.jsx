import styles from "src/components/Forms/Forms.module.css";

export function Forms(props) {
  return (
    <>
      {props.FORMS.map(form => {
        return (
          <div key={form.formTitle}> 
            <h3 className={styles.formTitle}>{form.formTitle}</h3>
            {form.supplement ? <p>{form.supplement}</p> : null}
            <input type="number" className={styles.form} id={form.id}/>
          </div>
        );
      })}
    </>
  );
}