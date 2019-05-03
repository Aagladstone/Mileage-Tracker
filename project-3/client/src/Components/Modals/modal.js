
import React from 'react'

export function Modal({ handleClose, show, children }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

{/* <button class="create-event show-modal button button-primary button-medium" href="api/event">Create Event</button>
<div class="modal-mask" id="modal-event" style="display: none;">
  <div class="modal" id="modal-event2" style="display: none;">
    <div class="modal-head">
      <p class="modal-title">Create Event</p>
    </div>
    <form>
      <div class="modal-body">
        <div class="form-group">
          <div class="row">
          <div class="col-md-6">
            <label>Title</label>
            <input type="text" class="form-control" id="nameEvent" placeholder="Enter the name of the event" required maxlength="45" minlength="1">
            <div class="form-group">
              <label for="categorie-list">Categorie</label>
              <select class="form-control" id="categorie-list" required>
                <option label="Select Categorie"></option>
                {{#each categorie}}
                  <option value="{{this.id}}">{{this.name}}</option>
                {{/each}}
              </select>
              <label>Description</label>
              <input type="text" class="form-control" id="description" maxlength="100">
            </div>
          </div>
          <div class="col-md-6">
            <label>Date</label>
            <input type="date" class="form-control" id="date" required>
            <label>Time</label>
            <input type="time" class="form-control" id="time" required>
              <label>User</label> 
             
        <select id="user-list" required>
          <option label="Select User"></option>
          {{#each user}}
            <option value="{{this.id}}">{{this.name}}</option>
          {{/each}}
        </select>
            <div class="form-check">
        </div>
       
      </div>


          </div> 
          </div>
      </div>
             <div class="event-errors" id="errorFeedback"></div>    
     <div class="modal-footer">
              
            <button class="modal-cancel button-primary">Cancel</button>
            <button class="button-primary submit submitEvent">Create</button>
            </div>
        </form>
      </div>
    </div>

</div>
</div> */}
