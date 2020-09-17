//Java Solution

public class Solution {
    public ListNode detectCycle(ListNode head) {
        
        ListNode intersect = getIntersect(head);
        if (intersect == null) {
            return null;
        }
        
        ListNode slow = head;
        while (slow != intersect) {
            slow = slow.next;
            intersect = intersect.next;
        }
        
        return intersect;
    }
    
    public ListNode getIntersect(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                return fast;
            }
        }
        
        return null;
    }
}