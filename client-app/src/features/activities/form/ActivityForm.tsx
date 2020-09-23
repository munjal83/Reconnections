import React, { FormEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import {v4 as uuid}  from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity,
}) => {
  const initializeFormState = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeFormState);

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  const handleInputForm = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Title"
          onChange={handleInputForm}
          name="title"
          value={activity.title}
        />
        <Form.TextArea
          placeholder="Description"
          onChange={handleInputForm}
          name="description"
          value={activity.description}
        />
        <Form.Input
          placeholder="Category"
          onChange={handleInputForm}
          name="category"
          value={activity.category}
        />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          onChange={handleInputForm}
          name="date"
          value={activity.date}
        />
        <Form.Input
          placeholder="City"
          onChange={handleInputForm}
          name="city"
          value={activity.city}
        />
        <Form.Input
          placeholder="Venue"
          onChange={handleInputForm}
          name="venue"
          value={activity.venue}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};