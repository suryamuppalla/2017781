<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Contacts_model extends CI_Model
{

    function getAllContacts()
    {
        $this->load->database();
        // $otherdb = $this->load->database('library', TRUE);
        $response = array();

        // Select record
        $this->db->select('*');
        $q = $this->db->get('users');
        $response = $q->result_array();

        return $response;
    }
}
